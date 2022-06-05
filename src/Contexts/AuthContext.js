import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    token: null,
    userId: null,
    expiration: null
  })
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
