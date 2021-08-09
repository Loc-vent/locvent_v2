import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {userData} from '../Data/Data';

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.fullContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.avatar}>
            <Avatar.Image size={120} source={require('../Assets/guy.jpeg')} />
          </TouchableOpacity>

          <View style={styles.box1}>
            <Text style={styles.titleText}>Date joined </Text>

            <Text style={styles.normalText}> {userData.dateJoined} </Text>
          </View>

          <View>
            <Text style={styles.titleText}>Reports </Text>

            <Text style={styles.normalText}>{userData.totalReports}</Text>
          </View>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{userData.firstName} </Text>
          <Text style={styles.nameText}>{userData.lastName} </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#009F93',
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
              }}>
              About
            </Text>
            <Text style={styles.detailText}>{userData.about}</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.titleText}> Location : </Text>
          <Text style={styles.detailText}> {userData.location} </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.titleText}> Date of Birth </Text>
          <Text style={styles.detailText}> {userData.dateOfBirth} </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.titleText}> Phone Number </Text>
          <Text style={styles.detailText}> {userData.phoneNumber} </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  fullContainer: {
    paddingTop: 20,
    marginBottom: 150,
  },
  avatar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  normalText: {
    fontSize: 50,
    color: '#009F93',
    flexWrap: 'wrap',
    fontWeight: '100',
    fontFamily: 'Comfortaa',
  },
  titleText: {
    fontSize: 30,
    color: '#009F93',
    letterSpacing: 1.9,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 30,
  },
  nameContainer: {
    fontSize: 20,
    paddingLeft: 40,
    // marginBottom: 10,
  },
  nameText: {
    fontSize: 50,
    fontFamily: 'Comfortaa',
    color: '#009F93',
    letterSpacing: 4.9,
    fontWeight: '100',
  },
  detailText: {
    color: '#037171',
    fontSize: 25,
    letterSpacing: 4.9,
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
  },
};
