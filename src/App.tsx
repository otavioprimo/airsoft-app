import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';

import SelectedTheme from './themes';
import CoreNavigation from '~/modules/core/navigation';
import {navigationRef} from '~/utils/rootNavigation';
import {Store, persistor} from '~/modules/core/configs/store';

if (__DEV__) {
  import('~/modules/core/configs/reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
}

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={SelectedTheme}>
          <NavigationContainer ref={navigationRef}>
            <CoreNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
