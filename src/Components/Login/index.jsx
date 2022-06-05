import React, { useState, useContext } from 'react'
import { View, Image, Text, TextInput, TouchableHighlight } from 'react-native'
import { texts, resources } from './constans.js'
import { login } from './functions.js'
import { AuthContext } from '../../Contexts/AuthContext.js'

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
    <View>
      <View>
        <Image style={{ width: 140, height: 140 }} source={resources.logo} />
        <Text>{texts.title}</Text>
        <View>
          <Text>{texts.labelUser}</Text>
          <TextInput
            placeholder={texts.placeholderUser}
            onChangeText={handleChangeUser}
            value={user}
            keyboardType={'numeric'}
            maxLength={15}
          />
        </View>
        <View>
          <Text>{texts.labelCode}</Text>
          <TextInput
            placeholder={texts.placeholderCode}
            onChangeText={handleChangeCode}
            value={code}
            keyboardType={'numeric'}
            maxLength={4}
          />
        </View>
        <TouchableHighlight onPress={handlePressLogin}>
          <Text>{texts.button}</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Login
