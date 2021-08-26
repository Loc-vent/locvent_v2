import React from 'react';

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MessageNoticePage() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
        <MessageNoticeCard />
      </ScrollView>
    </View>
  );
}

function MessageNoticeCard() {
  return (
    <View>
      <View style={styles.noticeCard}>
        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            marginTop: 5,
          }}>
          this is notice card
        </Text>

        <TouchableOpacity
          onPress={() => {
            console.log('notice clear button');
          }}>
          <MaterialCommunityIcons name="close" color="red" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  noticeCard: {
    width: 450,
    padding: 20,
    backgroundColor: '#009F93',
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
