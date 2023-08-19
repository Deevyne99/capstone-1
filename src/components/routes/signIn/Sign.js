import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from '../../../utils/firebase/firebase'

const SignIn = () => {
  const loginUser = async () => {
    const response = await signInWithGooglePopup()
    const { user } = response
    CreateUserDocumentFromAuth(user)
    // console.log(response)
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={() => loginUser()}>sign in with goggle</button>
    </div>
  )
}
export default SignIn
