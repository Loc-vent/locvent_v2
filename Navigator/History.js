import React from 'react';
import {HistoryList} from '../Screens/HistoryScreens/HistoryList';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function History({navigation}) {
  return (
    <Stack.Navigator
      options={{
        initialRouteName: 'HistoryList',
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <Icon name="md-search" size={30} color="#fff" />
          </View>
        ),
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Message')}
            title="Go Messages">
            <MaterialCommunityIcons
              style={{
                backgroundColor: '#009F93',
              }}
              name="comment-processing"
              color="#009F93"
              size={40}
            />
          </Button>
        ),
      }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: '#009F93',
            fontSize: 40,
            height: 70,
            padding: 20,
            fontSize: 20,
            letterSpacing: 5,
          },
        }}
        name="history"
        component={HistoryList}
      />
    </Stack.Navigator>
  );
}
