import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabs} from './Navigator/Navigator';
import AuthStack from './Navigator/Auth';

import {Provider as PaperProvider} from 'react-native-paper';
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setLoggenIn] = useState(false);

  return (
    <PaperProvider>
      <NavigationContainer>
        {isLoggedIn ? <BottomTabs /> : <AuthStack />}
        {/* <BottomTabs/> */}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
