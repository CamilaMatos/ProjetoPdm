import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaPaises from './src/screens/ListaPaises';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ListaPaises" component={ListaPaises} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;