import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {ActivityIndicator, Colors} from 'react-native-paper';
import LogoContainer from '../../components/LogoContainer';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.parentContainer}>
      <View
        style={styles.logoContainer}
        onPress={() => navigation.navigate('LoginScreen')}>
        <LogoContainer />
      </View>

      <View>
        <ActivityIndicator animating={true} color="#009F93" size={35} />
      </View>
    </View>
  );
}

const styles = {
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-around',

  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  parentContainer: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};
