import React from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const HistoryCard = ({
  reporterId,
  ReportLatitude,
  ReportLongitude,
  DetectedLocust,
  created_on,
}) => (
  <Card style={styles.container}>
    <Card.Content>
      <Title>
        <Text style={styles.texts}>id : {reporterId}</Text>
      </Title>
      <Title>
        <Text style={styles.texts}>date : {created_on}</Text>
      </Title>
      <Title>
        <Text style={styles.texts}>
          location - lat - {ReportLatitude} , log - {ReportLongitude}
        </Text>
      </Title>

      <Paragraph>
        <Text style={styles.texts}>detected locust : {DetectedLocust}</Text>
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
