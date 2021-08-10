import React from 'react';
import SplashScreen from '../Screens/AuthScreen/SplashScreen';
import LoginScreen from '../Screens/AuthScreen/LoginScreen';
import RegisterScreen from '../Screens/AuthScreen/RegesterScreen';
import ForgotPassword from '../Screens/AuthScreen/ForgotPassword';
import ConfirmForgotPassword from '../Screens/AuthScreen/ConfirmForgotPassword';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      options={{
        animationEnabled: true,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="ConfirmForgotPassword"
        component={ConfirmForgotPassword}
      />
    </Stack.Navigator>
  );
}
