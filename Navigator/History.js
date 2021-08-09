import React from 'react';
import {HistoryList } from '../Screens/HistoryScreens/HistoryList';

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
    
    </Stack.Navigator>
  );
}
