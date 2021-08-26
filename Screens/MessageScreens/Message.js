import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MessageNoticePage from '../../components/MessageNoticePage';

export default function Message() {
  const [activeTab, setActiveTab] = useState('MESSAGES');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => toggle('MESSAGES')}>
          <Text
            //    style={styles.tabContainerTexts}
            style={
              activeTab === 'MESSAGES'
                ? styles.tabContainerTexts
                : styles.tabContainerTextsActive
            }>
            MESSAGES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggle('NOTICE')}>
          <Text
            style={
              activeTab === 'NOTICE'
                ? styles.tabContainerTexts
                : styles.tabContainerTextsActive
            }>
            Notice
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* <Text>this : {activeTab}</Text> */}
      </View>

      {activeTab === 'MESSAGES' ? (
        <View>
          <Text> this is MESSAGES component </Text>
        </View>
      ) : activeTab === 'NOTICE' ? (
        <View>
          <MessageNoticePage />

        </View>
      ) : null}
    </View>
  );
}

const styles = {
  tabContainer: {
    flexDirection: 'row',
    marginTop: 120,
    justifyContent: 'space-evenly',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  tabContainerTexts: {
    fontSize: 30,
    letterSpacing: 6,
    color: '#009F93',

    borderBottomWidth: 3,
    paddingBottom: 20,

    borderBottomColor: '#009F93',
    marginBottom: 10,
  },
  tabContainerTextsActive: {
    fontSize: 30,
    color: '#009F93',
  },
  activeTab: {
    fontSize: 40,
  },
  activeTabNot: {
    fontSize: 20,
  },
};
