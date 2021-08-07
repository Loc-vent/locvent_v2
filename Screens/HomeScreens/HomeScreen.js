import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
          <Text>this is Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ReportForm')}>
        <Text>go to history view</Text>
      </TouchableOpacity>
    </View>
  );
}
