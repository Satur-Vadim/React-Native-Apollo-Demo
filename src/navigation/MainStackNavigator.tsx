import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BootSplash from '../screens/Home/Home';

import type { TRootStackParamList } from './types/TRootStackParamList';

const Stack = createStackNavigator<TRootStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BootSplash}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
