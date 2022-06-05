import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Components/Login'

const Stack = createStackNavigator()

const options = {
  headerShown: false,
  animationEnabled: false
}

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Login'} component={Login} options={options}/>
  </Stack.Navigator>
)

export default AuthStack
