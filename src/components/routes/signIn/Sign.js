import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../../utils/firebase/firebase'
import Signup from '../../sign-up-form/Signup'

const SignIn = () => {
  useEffect(() => {
    const fetchAuth = async () => {
      const response = await getRedirectResult(auth)
      console.log(response)
    }
    fetchAuth()
  })
  const loginGooglePopUp = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    const userRef = await CreateUserDocumentFromAuth(user)
    // console.log(response)
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={() => loginGooglePopUp()}>
        sign in with goggle popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with goggle redirect
      </button>
      <Signup />
    </div>
  )
}
export default SignIn
