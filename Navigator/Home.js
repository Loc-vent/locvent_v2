import React from 'react';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import ReportForm from '../Screens/HomeScreens/ReportForm';
import ReportSuccess from '../Screens/HomeScreens/ReportSuccess';
import Message from '../Screens/MessageScreens/Message';

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
      <Stack.Screen
        options={{

          headerTransparent: true,
          headerTitle: 'information board',
          headerTitleStyle: {
            color: '#009F93',
            fontSize: 30,
            letterSpacing: 2,
            fontWeight: '100',
          },
          headerStyle: {
            backgroundColor: '#009F93',
            height: 100,
          },
          headerLeftContainerStyle: {
            color: '#009F93',
            fontSize: 10,
          },
        }}
        name="Message"
        component={Message}
      />
    </Stack.Navigator>
  );
}
