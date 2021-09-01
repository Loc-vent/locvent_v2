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
            color: '#009F93',
            fontSize: 15,
            marginTop: 5,
          }}>
          this is notice card
        </Text>

        <TouchableOpacity
          onPress={() => {
            console.log('notice clear button');
          }}>
          <MaterialCommunityIcons name="close" color="red" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  noticeCard: {
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'silver',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
