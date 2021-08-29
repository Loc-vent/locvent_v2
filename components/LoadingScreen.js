import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {View, Text} from 'react-native';
export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <ActivityIndicator animating={true} color="#009F93" size={35} />
      </View>
    </View>
  );
}
