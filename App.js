import React, {useState, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabs} from './Navigator/Navigator';
import AuthStack from './Navigator/Auth';
import LoadingScreen from './components/LoadingScreen';

import {Provider as PaperProvider} from 'react-native-paper';
import Store, {Context} from './Context/Store';

const App = ({navigation}) => {
  return (
    <Store>
      <MiddleChild />
    </Store>
  );
};

export default App;

function MiddleChild({navigation}) {
  const [state, setState] = useContext(Context);
  // console.log;
  const [isLoggedIn, setLoggenIn] = useState(true);
  const [user, setUser] = useState(null);
  useEffect((state) => {
    setTimeout(() => {
      setLoggenIn(!isLoggedIn);
      // setUser({});
    }, 1000);
  }, []);
  return (

      <PaperProvider>
        <NavigationContainer>
          {isLoggedIn ? (
            <LoadingScreen />
          ) : user ? (
            <BottomTabs />
          ) : (
            <AuthStack />
          )}
        </NavigationContainer>
      </PaperProvider>

  );
}
