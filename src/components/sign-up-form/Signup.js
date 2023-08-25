import { useState } from 'react'
import {
  createUserWithEmailAndPasswordAuth,
  CreateUserDocumentFromAuth,
} from '../../utils/firebase/firebase'
const defaulFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const Signup = () => {
  const [formFields, setFormFields] = useState(defaulFields)
  const { displayName, email, password, confirmPassword } = formFields
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
    <div>
      <h1>Sign up with your email and password</h1>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''>Display Name</label>
        <input
          type='text'
          required
          name='displayName'
          onChange={handleChange}
          value={displayName}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
        />
        <label htmlFor='confirm-password'>Confirm Password</label>
        <input
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>sign up</button>
      </form>
    </div>
  )
}

export default Signup
