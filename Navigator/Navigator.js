import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import History from './History';
import Profile from './Profile';
import {TouchableOpacity, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Message from '../Screens/MessageScreens/Message';

import {AuthContext} from '../Context/AuthProvider';

const Tab = createMaterialBottomTabNavigator();

// const Tabs = AnimatedTabBarNavigator();
// const Stack = createStackNavigator();
// const Tab1 = createBottomTabNavigator();

export function BottomTabs() {
  const {user, getUserReportHistory} = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      labeled={true}
      initialRouteName="Home"
      activeColor="#009F93"
      barStyle={{backgroundColor: '#fff'}}
      // headerShown={true}
      screenOptions={{
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
          headerShown: true,
          title: 'history',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              style={focused ? styles.iconFocused : styles.iconNotFocused}
              onPress={() => getUserReportHistory(user._id, 9)}
              name="history"
              size={focused ? 25 : 20}
            />
          ),
          tabBarBadge: 3,
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Arial',
            padding: 20,
            color: '#009F93',
            fontWeight: '200',
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          onPress: () => console.log('home clicked'),
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <TouchableOpacity onPress={() => console.log('home bar ')}>
                <MaterialCommunityIcons
                  style={focused ? styles.iconFocused : styles.iconNotFocused}
                  name="circle-slice-8"
                  size={focused ? 25 : 20}
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
          headerShown: true,
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <TouchableOpacity onPress={() => console.log('profile clicked ')}>
                <MaterialCommunityIcons
                  name="account"
                  style={focused ? styles.iconFocused : styles.iconNotFocused}
                  size={focused ? 30 : 25}
                />
              </TouchableOpacity>
            </View>
          ),
          // headerTransparent: true,
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Arial',
            padding: 20,
            color: '#009F93',
            fontWeight: '200',
          },
        }}
      />
      {/* <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <TouchableOpacity onPress={() => console.log('profile clicked ')}>
                <MaterialCommunityIcons
                  name="comment-processing"
                  style={focused ? styles.iconFocused : styles.iconNotFocused}
                  size={focused ? 25 : 20}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTransparent: false,
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Arial',
            padding: 20,
            color: '#009F93',
            fontWeight: '200',
          },
        }}
        name="Message"
        component={Message}
      /> */}
    </Tab.Navigator>
  );
}

const styles = {
  iconFocused: {
    color: '#009F93',
    // backgroundColor: '#fff',
    // paddingRight: 40,
    // paddingLeft: 40,
    // paddingBottom: 2,
    // paddingTop: 7,
    // borderRadius: 10,
    // borderColor: '#009F93',
    // borderWidth: 3,
  },
  iconNotFocused: {
    color: 'silver',
    // backgroundColor: '#fff',
    // paddingRight: 25,
    // paddingLeft: 25,
    // paddingBottom: 2,
    // paddingTop: 7,
    // borderRadius: 10,
    // borderColor: 'silver',
    // borderWidth: 3,
  },
};
