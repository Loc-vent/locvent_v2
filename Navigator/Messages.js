import React from 'react';
import Message from '../Screens/MessageScreens/message';
import News from '../Screens/MessageScreens/News';
import NoticeBoard from '../Screens/MessageScreens/NoticeBoard';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home({navigation}) {
  return (
    <Stack.Navigator
      options={{
        initialRouteName: 'Message',
      }}>
      <Stack.Screen
        options={{
          // headerShown: false,
        }}
        name="information board"
        component={Message}
      />
      <Stack.Screen
        options={{
          // headerShown: false,
        }}
        name="News"
        component={News}
      />
      <Stack.Screen
        options={{
          // headerShown: false,
        }}
        name="NoticeBoard"
        component={NoticeBoard}
      />
    </Stack.Navigator>
  );
}
