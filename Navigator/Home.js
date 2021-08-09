import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import ReportForm from '../Screens/HomeScreens/ReportForm';
import ReportSuccess from '../Screens/HomeScreens/ReportSuccess';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home({navigation}) {
  return (
    <Stack.Navigator
      options={{
        initialRouteName: 'HistoryList',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={
          {
            // headerShown: false,
          }
        }
        name="ReportForm"
        component={ReportForm}
      />
      <Stack.Screen
        options={
          {
            // headerShown: false,
          }
        }
        name="ReportSucceess"
        component={ReportSuccess}
      />
    </Stack.Navigator>
  );
}
