import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {HistoryData, userData} from '../Data/Data';

const HistoryCard = ({
  id,
  Latitude,
  Longitude,
  date,
  description,
  navigation,
}) => (
  <Card style={styles.container}>
    <Card.Content>
      <Title>
        {' '}
        <Text style={styles.texts}> ID : {id} </Text>
      </Title>
      <Title>
        {' '}
        <Text style={styles.texts}> Date : {date} </Text>
      </Title>
      <Title>
        {' '}
        <Text style={styles.texts}>
          location - Lat - {Latitude} , Log - {Longitude}
        </Text>
      </Title>
      <Paragraph>
        <Text style={styles.texts}>Description : {description}</Text>
      </Paragraph>
    </Card.Content>
    {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
  </Card>
);

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.currentHeight  - 10|| 0,
    borderRadius: 13,
    backgroundColor: '#fff',
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderLeftColor: "#009F93",
    borderColor:"#009F93",
    color: '#009F93',
    textDecorationColor: '#009F93',
    textShadowColor: '#009F93',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 1.32,
    elevation: 2,
  },
  texts: {
    color: '#009F93',
    fontSize: 19,
    fontFamily: 'Comfortaa',
    letterSpacing: 0.5,
    textShadowColor: '#fff',
    lineHeight: 40,
  },
  title: {
    fontSize: 32,
  },
});
