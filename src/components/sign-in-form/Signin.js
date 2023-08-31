import { useState, useContext } from 'react'
import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
  signInWithEmailAndPasswordAuth,
} from '../../utils/firebase/firebase'
import FormInput from '../form-input/FormInput'
import './sign-in.scss'
import Button from '../button/Button'
import { userContext } from '../../context/UserContext'
const defaultFields = {
  email: '',
  password: '',
}
const Signin = () => {
  const [formFields, setFormFields] = useState(defaultFields)
  const { email, password } = formFields
  const { setCurrentUser } = useContext(userContext)

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    await CreateUserDocumentFromAuth(user)
    // console.log(response)
  }

  const resetFormFields = () => {
    setFormFields(defaultFields)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { user } = await signInWithEmailAndPasswordAuth(email, password)
      setCurrentUser(user)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label={'Password'}
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit' buttonType=''>
            sign in
          </Button>
          <Button onClick={signInWithGoogle} buttonType='google'>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Signin
