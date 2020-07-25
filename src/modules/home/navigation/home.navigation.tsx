import * as React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from '~/modules/home/screens/Dashboard';

import Theme from '~/themes/index';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Theme.background} />
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </>
  );
}
