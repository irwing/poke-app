import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext.js'
import AuthStack from './AuthStack.jsx'
import AppStack from './AppStack.jsx'

const RootStack = () => {
  const { auth } = useContext(AuthContext)
  return (!auth?.token) ? (<AuthStack />) : (<AppStack />)
}

export default RootStack
