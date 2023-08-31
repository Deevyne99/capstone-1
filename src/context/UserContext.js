import React, { createContext, useState } from 'react'
//default value
export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
