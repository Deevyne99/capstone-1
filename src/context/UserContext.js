import React, { createContext, useEffect, useState } from 'react'
import {
  CreateUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase'

//default value
export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  console.log(currentUser)
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        CreateUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
