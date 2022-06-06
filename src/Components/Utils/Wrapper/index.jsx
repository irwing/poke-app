import { View } from 'react-native'
import Header from '../../Header'
import Tabs from '../../Tabs'

const Wrapper = (props) => {
  const { children } = props
  return (
    <View>
      <Header />
      <View>{children}</View>
      <Tabs />
    </View>
  )
}

export default Wrapper
