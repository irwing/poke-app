import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/Contexts/AuthContext.js'
import RootStack from './src/Stacks/RootStack'

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  )
}
