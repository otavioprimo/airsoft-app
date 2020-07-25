import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigation from '~/modules/auth/navigation/auth.navigation';
import HomeNavigation from '~/modules/home/navigation/home.navigation';

const InitNavigator = createStackNavigator();

export default function CoreNavigation() {
  return (
    <InitNavigator.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <InitNavigator.Screen name="Auth" component={AuthNavigation} />
      <InitNavigator.Screen name="Home" component={HomeNavigation} />
    </InitNavigator.Navigator>
  );
}
