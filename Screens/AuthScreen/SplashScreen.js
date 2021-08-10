import React , {useState , useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {ActivityIndicator, Colors} from 'react-native-paper';
export default function SplashScreen({navigation}) {
  //set timer to load log in screen 
  setInterval(()=>{
    navigation.navigate('LoginScreen')
  }, 3000)

  return (
    <View style={styles.parentContainer}>
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <View style={styles.imagecontainer}>
            <Image
              style={{
                height: 300,
                width: 250,
              }}
              source={require('../../Images/LOGO.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <ActivityIndicator animating={true} color="#009F93" size={75} />
      </View>
    </View>
  );
}



const styles = {
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 200,
  },
  logoContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 290,
    paddingBottom: 50,
    alignSelf: 'center',

    borderRadius:60,
    borderBottomColor:'#222222',

    //shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
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
