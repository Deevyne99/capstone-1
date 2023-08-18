import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCGFNcSl32564L5mlts1UecfKRvz7fDK7M',
  authDomain: 'crwn-clothing-db-7cc96.firebaseapp.com',
  projectId: 'crwn-clothing-db-7cc96',
  storageBucket: 'crwn-clothing-db-7cc96.appspot.com',
  messagingSenderId: '1014808887964',
  appId: '1:1014808887964:web:1a93a0d85a6340ee61a359',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
