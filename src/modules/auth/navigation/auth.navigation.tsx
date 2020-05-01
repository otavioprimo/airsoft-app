import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '~/modules/auth/screens/Login';
import SignupScreen from '~/modules/auth/screens/Signup';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
