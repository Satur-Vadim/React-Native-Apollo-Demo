import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './MainStackNavigator';
import navigationRef from './RootNavigation';

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
