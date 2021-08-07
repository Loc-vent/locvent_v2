import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ReportForm({navigation}) {
  return (
    <View>
      <Text>this is report form page Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ReportSucceess')}>
        <Text>go to history view</Text>
      </TouchableOpacity>
    </View>
  );
}
