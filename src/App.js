/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {
  StatusBar
} from 'react-native'

import { colors } from './styles/variables';

import Home from './pages/Home'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primarySilver} barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App;
