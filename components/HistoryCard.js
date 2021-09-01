import React, {useState} from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';


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
        <Text style={styles.texts}>id : {id}</Text>
      </Title>
      <Title>
        <Text style={styles.texts}>date : {date}</Text>
      </Title>
      <Title>
        <Text style={styles.texts}>
          location - lat - {Latitude} , log - {Longitude}
        </Text>
      </Title>
      <Paragraph>
        <Text style={styles.texts}>description : {description}</Text>
      </Paragraph>
    </Card.Content>
  </Card>
);

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.currentHeight - 10 || 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderLeftColor: '#009F93',
    borderColor: '#009F93',
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
    fontSize: 16,
    fontFamily: 'Comfortaa',
    letterSpacing: 0.5,
    textShadowColor: '#fff',
    lineHeight: 30,
  },
  title: {
    fontSize: 32,
  },
});
