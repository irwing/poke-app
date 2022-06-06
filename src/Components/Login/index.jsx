import React, { useState, useContext } from 'react'
import { View, Image, Text, TextInput, TouchableHighlight } from 'react-native'
import { texts, resources } from './constans.js'
import { login } from './functions.js'
import { AuthContext } from '../../Contexts/AuthContext.js'
import { tw } from 'react-native-tailwindcss'

const Login = () => {
  const [user, setUser] = useState('')
  const [code, setCode] = useState('')
  const authContext = useContext(AuthContext)

  const handlePressLogin = () => {
    login({ authContext })
  }

  const handleChangeUser = value => setUser(value)
  const handleChangeCode = value => setCode(value)

  return (
    <View style={[tw.hFull, tw.bgBlue200, tw.justifyCenter, tw.itemsCenter]}>
      <View style={[tw.itemsCenter, tw.wFull, tw.p20]}>

        <Image style={{ width: 220, height: 80 }} source={resources.logo} />
        <Text style={[tw.mT6, tw.mB6, tw.textXl, tw.fontLight, tw.textCenter]}>{texts.title}</Text>

        <View style={[tw.wFull]}>
          <Text style={[tw.mB2]}>{texts.labelUser}</Text>
          <TextInput
            style={[tw.bgWhite, tw.h12, tw.pX4, tw.mB4, tw.rounded]}
            placeholder={texts.placeholderUser}
            onChangeText={handleChangeUser}
            value={user}
            maxLength={15}
          />
        </View>
        <View style={[tw.wFull]}>
          <Text style={[tw.mB2]}>{texts.labelCode}</Text>
          <TextInput
            style={[tw.bgWhite, tw.h12, tw.pX4, tw.mB4, tw.rounded]}
            placeholder={texts.placeholderCode}
            onChangeText={handleChangeCode}
            value={code}
            keyboardType={'numeric'}
            maxLength={4}
          />
        </View>
        <TouchableHighlight
          style={[tw.bgBlue300, tw.h12, tw.justifyCenter, tw.pX8, tw.mT4]}
          onPress={handlePressLogin}>
          <Text>{texts.button}</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Login
