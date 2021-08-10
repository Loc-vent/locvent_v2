import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export default function LogoContainer() {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.imagecontainer}>
          <Image
            style={{
              height: 300,
              width: 250,
            }}
            source={require('../Images/LOGO.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 180,
    
  },
 

};
