import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import History from './History';
import Profile from './Profile';
import {TouchableOpacity, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function BottomTabs() {
  const navigation = useNavigation();
  const [isLoggedIn, setLoggenIn] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#009F93',
        tabBarInactiveTintColor: '#222',
        tabBarShowLabel: false,

        tabBarItemStyle: {
          backgroundColor: '#ffffff',
          borderRadius: 20,
          margin: 10,
          //add inner shadow here

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },

        tabBarStyle: {
          backgroundColor: '#009F93',
          height: 70,
          position: 'absolute',
          margin: 60,
          borderRadius: 20,
          // add shadow here

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        },
        headerStyle: {
          height: 90,
        },

        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Message')}
            title="Go to Messages">
            <MaterialCommunityIcons
              style={{
                marginRight: 30,
              }}
              name="comment-processing"
              color="#009F93"
              size={40}
            />
          </Button>
        ),
      }}>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarButtonColor: '#009F93',

          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              onPress={() => console.log('history clicked ')}
              name="history"
              color={color}
              size={focused ? 40 : 25}
            />
          ),
          tabBarBadge: 3,

          headerTitleStyle: {
            fontSize: 40,
            fontFamily: 'Arial',
            padding: 20,
            color: '#009F93',
            fontWeight: '200',
          },
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          onPress: () => console.log('home clicked'),
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <TouchableOpacity onPress={() => console.log('home bar ')}>
                <MaterialCommunityIcons
                  name="circle-slice-8"
                  color={color}
                  size={focused ? 40 : 25}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <TouchableOpacity onPress={() => console.log('profile clicked ')}>
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={focused ? 40 : 25}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 50,
            fontFamily: 'Arial',
            padding: 20,
            color: '#009F93',
            fontWeight: '200',
          },
        }}
      />
    </Tab.Navigator>
  );
}
