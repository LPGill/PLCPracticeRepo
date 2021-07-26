/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import Day1Component from './Day1Component';

const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Day1" component={Day1Component} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="With Hooks" component={FunctionalComponent} />
      <Stack.Screen name="With State" component={ClassComponent} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
