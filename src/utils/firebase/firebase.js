import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()
export const CreateUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  //if user does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef
}
export const createUserWithEmailAndPasswordAuth = async (email, password) => {
  if (!email || !password) return
  const response = await createUserWithEmailAndPassword(auth, email, password)
  // console.log(response)
}
