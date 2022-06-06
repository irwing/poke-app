import { createStackNavigator } from '@react-navigation/stack'
import Pokedesk from '../Components/Pokedesk'
import PokemonDetail from '../Components/PokemonDetail'

const Stack = createStackNavigator()

const options = {
  headerShown: false,
  animationEnabled: false
}

const AppScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Pokedesk'} component={Pokedesk} options={options} />
    <Stack.Screen name={'PokemonDetail'} component={PokemonDetail} options={options} />
  </Stack.Navigator>
)

export default AppScreen
