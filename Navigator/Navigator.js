import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import History from './History';
import Profile from './Profile';
import {TouchableOpacity, View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

export function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#009F93',
        tabBarInactiveTintColor: '#222',
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: '#ffffff',
          borderRadius: 50,
          margin: 10,
        },

        tabBarStyle: {
          backgroundColor: '#009F93',
          height: 70,
          position: 'absolute',
          margin: 60,
          borderRadius: 50,
          elevation: 4,
        },
        headerStyle: {
          height: 100,
        },
        headerRight: ({navigation}) => (
          <TouchableOpacity
            style={{
              marginRight: 30,
            }}>
            <MaterialCommunityIcons
              onPress={() => navigation.navigate('Message')}
              name="comment-processing"
              color="#009F93"
              size={40}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            style={{
              marginLeft: 20,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              color="#009F93"
              size={30}
            />
          </TouchableOpacity>
        ),
      }}>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <TouchableOpacity onPress={console.log('history clicked ')}>
                <MaterialCommunityIcons
                  name="history"
                  color={color}
                  size={focused ? 40 : 30}
                />
              </TouchableOpacity>
            </View>
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
              <TouchableOpacity onPress={console.log('home bar ')}>
                <MaterialCommunityIcons
                  name="circle-slice-8"
                  color={color}
                  size={focused ? 40 : 30}
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
              <TouchableOpacity onPress={console.log('profile clicked ')}>
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={focused ? 40 : 30}
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
