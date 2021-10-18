/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Movies from './src/screens/Movies';
import Series from './src/screens/Series';
import DataList from './src/screens/DataList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={DataList} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Series" component={Series} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
