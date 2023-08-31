import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from '../../../utils/firebase/firebase'
import Signup from '../../sign-up-form/Signup'
import Signin from '../../sign-in-form/Signin'
import './authentication.scss'

const Authentication = () => {
  // useEffect(() => {
  //   const fetchAuth = async () => {
  //     const response = await getRedirectResult(auth)
  //     console.log(response)
  //   }
  //   fetchAuth()
  // })
  // const loginGooglePopUp = async () => {
  //   const response = await signInWithGooglePopup()
  //   const { user } = response
  //   const userRef = await CreateUserDocumentFromAuth(user)
  //   // console.log(response)
  // }

  return (
    <div className='authentication-container'>
      <Signin />
      <Signup />
    </div>
  )
}
export default Authentication
