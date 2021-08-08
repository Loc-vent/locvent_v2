import React from 'react';
import {View, Text} from 'react-native';
import {HistoryList , HistoryView} from '../Screens/HistoryScreens/HistoryList';
// import HistoryView from '../Screens/HistoryScreens/HistoryView';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function History({navigation}) {
  return (
    <Stack.Navigator
      options={{
        initialRouteName: 'HistoryList',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HistoryList"
        component={HistoryList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HistoryView"
        component={HistoryView}
      />
    </Stack.Navigator>
  );
}
