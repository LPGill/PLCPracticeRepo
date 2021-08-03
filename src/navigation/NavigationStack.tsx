/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import GalleryComponent from '../screens/GalleryScreen';
import ImageComponent from '../screens/ImageComponent';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Gallery" component={GalleryComponent} />
      <Stack.Screen name="Image Screen" component={ImageComponent} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
