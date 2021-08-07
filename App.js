import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MyTabs} from './Navigator/Navigator';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
