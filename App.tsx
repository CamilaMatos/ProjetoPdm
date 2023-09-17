import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPage from './src/screens/ListPage';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListPage" component={ListPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;