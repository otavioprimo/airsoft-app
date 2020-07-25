import * as React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppLoading from '~/modules/auth/screens/AppLoading';
import LoginScreen from '~/modules/auth/screens/Login';
import SignupScreen from '~/modules/auth/screens/Signup';

import Theme from '~/themes/index';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Theme.background} />
      <Stack.Navigator
        initialRouteName="AppLoading"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AppLoading" component={AppLoading} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </>
  );
}
