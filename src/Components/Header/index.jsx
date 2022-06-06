import React, { useContext } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { logout } from './functions.js'
import { AuthContext } from '../../Contexts/AuthContext.js'
import { tw } from 'react-native-tailwindcss'

const logo = require('../../../assets/pokemon-logo.png')

const Header = (props) => {
  const authContext = useContext(AuthContext)

  const handlePressLogout = () => {
    logout({ authContext })
  }

  return (
    <View style={[
      tw.mT2,
      tw.mB1,
      tw.flexRow,
      tw.justifyBetween,
      tw.itemsCenter,
      tw.pY4
    ]}>
      <Image style={{ width: 100, height: 34, marginRight: 3 }} source={logo} />
      <TouchableHighlight onPress={handlePressLogout}>
        <Text>{'salir'}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Header
