import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Components/Home'

const Stack = createStackNavigator()

const options = {
  headerShown: false,
  animationEnabled: false
}

const AppScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Home'} component={Home} options={options} />
  </Stack.Navigator>
)

export default AppScreen
