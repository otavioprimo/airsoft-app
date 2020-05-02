import * as React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '~/modules/auth/screens/Login';
import SignupScreen from '~/modules/auth/screens/Signup';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </>
  );
}
