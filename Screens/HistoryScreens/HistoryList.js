import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HistoryList({navigation}) {
  return (
    <View>
      <Text>this is history LIST</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HistoryView')}>
        <Text>go to history view</Text>
      </TouchableOpacity>
    </View>
  );
}
