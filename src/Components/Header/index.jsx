import React, { useContext } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { logout } from './functions.js'
import { AuthContext } from '../../Contexts/AuthContext.js'

const Header = (props) => {
  const authContext = useContext(AuthContext)

  const handlePressLogout = () => {
    logout({ authContext })
  }

  return (
    <View style={{ marginTop: 100 }}>
      <Text>Logo</Text>
      <TouchableHighlight onPress={handlePressLogout}>
        <Text>{'salir'}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Header
