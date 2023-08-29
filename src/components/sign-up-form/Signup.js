import { useState } from 'react'
import {
  createUserWithEmailAndPasswordAuth,
  CreateUserDocumentFromAuth,
} from '../../utils/firebase/firebase'
import FormInput from '../form-input/FormInput'
import './sign-up.scss'
import Button from '../button/Button'
const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFields)
  const { displayName, email, password, confirmPassword } = formFields
  const resetFormFields = () => {
    setFormFields(defaultFields)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('password do not match')
      return
    }
    try {
      const { user } = await createUserWithEmailAndPasswordAuth(email, password)
      // console.log(response)
      await CreateUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create user Email already exist')
      }
      console.log('user creation encountered an error', error)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className='sign-up-container'>
      <h2>Sign up with your email and password</h2>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          type='text'
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label={'Confirm Password'}
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit' buttonType=''>
          sign up
        </Button>
      </form>
    </div>
  )
}

export default Signup
