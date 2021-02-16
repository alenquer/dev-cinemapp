import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '../pages/home';
import SearchScreen from '../pages/search';
import Colors from '../constants/colors';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: Colors.header,
          },
        }}>
        <Screen
          options={{ headerShown: false }}
          name="home"
          component={HomeScreen}
        />
        <Screen name="search" component={SearchScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
