import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabs} from './Navigator/Navigator';
import AuthStack from './Navigator/Auth';
import LoadingScreen from './components/LoadingScreen';

import {Provider as PaperProvider} from 'react-native-paper';
import {set} from 'react-native-reanimated';
const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
  const [isLoggedIn, setLoggenIn] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoggenIn(!isLoggedIn);
      // setUser({});
    }, 1000);
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        {isLoggedIn ? <LoadingScreen /> : user ? <BottomTabs /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
