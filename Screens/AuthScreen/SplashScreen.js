import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {ActivityIndicator, Colors} from 'react-native-paper';
export default function SplashScreen({navigation}) {
  return (
    <View>
      <View style={styles.imagecontainer}>
        <TouchableOpacity>
          <Image
            style={{
              height: 300,
              width: 250,
            }}
            source={require('../../Images/LOGO.png')}
          />
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
};
