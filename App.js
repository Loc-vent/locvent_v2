import React, {useState, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabs} from './Navigator/Navigator';
import AuthStack from './Navigator/Auth';
import LoadingScreen from './components/LoadingScreen';
import auth from '@react-native-firebase/auth';
import {Provider as PaperProvider} from 'react-native-paper';
import Store, {Context} from './Context/Store';
import {AuthContext, AuthProvider} from './Context/AuthProvider';
const App = ({navigation}) => {
  return (
    <AuthProvider>
      <Store>
        <MiddleChild />
      </Store>
    </AuthProvider>
  );
};

export default App;

function MiddleChild({navigation}) {
  // const [state, setState] = useContext(Context);
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const [isLoggedIn, setLoggenIn] = useState(true);
  const [user1, setUser1] = useState(null);
  console.log('this is user context ', user);
  const onAuthStateChanged = user => {
    setUser(user);
  };
  if (initializing) {
    setInitializing(false);
  }

  //dummy effect for testing
  useEffect(() => {
    setTimeout(() => {
      setLoggenIn(!isLoggedIn);
      // setUser1({});
    }, 1000);
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return;
    <LoadingScreen />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {user ? <BottomTabs /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
}
