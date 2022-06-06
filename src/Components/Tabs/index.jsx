import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { tw } from 'react-native-tailwindcss'
import { useNavigation } from '@react-navigation/native'

const pokedesk = require('../../../assets/pokedesk.png')
const pokeball = require('../../../assets/pokeball.png')

const Tabs = () => {
  const navigation = useNavigation()

  const handlePressPokeDesk = () => {
    navigation.navigate('Pokedesk')
  }

  return (
    <View style={[
      tw.mT2,
      tw.flexRow,
      tw.justifyBetween,
      tw.itemsCenter,
      tw.bgWhite,
      tw.roundedLg,
      tw.pY1
    ]}>
      <TouchableWithoutFeedback onPress={handlePressPokeDesk}>
        <View style={[[
          tw.flexRow,
          tw.pY1,
          tw.borderR2,
          tw.borderGray300,
          tw.justifyCenter,
          tw.itemsCenter
        ], { width: '49%' }]}>
          <Image style={{ width: 38, height: 38, marginRight: 3 }} source={pokedesk} />
          <Text>PokeDesk</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={[[
        tw.flexRow,
        tw.pY1,
        tw.justifyCenter,
        tw.itemsCenter
      ], { width: '49%' }]}>
        <Image style={{ width: 38, height: 38, marginRight: 3 }} source={pokeball} />
        <Text>PokeBalls</Text>
      </View>
    </View>
  )
}

export default Tabs
