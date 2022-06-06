import { View } from 'react-native'
import Header from '../../Header'
import Tabs from '../../Tabs'
import { tw } from 'react-native-tailwindcss'

const Wrapper = (props) => {
  const { children } = props
  return (
    <View style={[
      tw.hFull,
      tw.p5,
      tw.pB2,
      tw.pT10,
      tw.bgBlue200
    ]}>
      <Header />
      <View style={[
        tw.flex1
      ]}>{children}</View>
      <Tabs />
    </View>
  )
}

export default Wrapper
