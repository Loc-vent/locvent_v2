import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper';
import {userData} from '../Data/Data';
import {AuthContext} from '../Context/AuthProvider';

export default function Profile() {
  const {user, logout} = useContext(AuthContext);
  console.log(user);
  return (
    <ScrollView>
      <View style={styles.fullContainer}>
        <View style={styles.topContainer}>
          <View style={styles.userHeader}>
            <TouchableOpacity style={styles.avatar}>
              <Avatar.Image size={120} source={user.photoURL} />
            </TouchableOpacity>

            <View style={{flexDirection: 'column', margin: 5}}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{user.uid} </Text>
                <Text style={styles.nameText}>{userData.lastName} </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text style={styles.titleText}>Date joined </Text>
                  <Text style={styles.normalText}> {user.creationTime} </Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Reports </Text>
                  <Text style={styles.normalText}>{userData.totalReports}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            // marginTop: 20,
            margin: 20,
            padding: 20,
            borderColor: '#009F93',
            borderWidth: 2,
            borderRadius: 10,
          }}>
          <View>
            <Text
              style={{
                color: '#009F93',
                fontSize: 20,
                // fontWeight: 'bold',
                padding: 5,
              }}>
              About
            </Text>
            <Text style={styles.detailText}>{userData.about}</Text>
          </View>
        </View>

        <View
          style={{
            // marginTop: 20,
            margin: 20,
            padding: 20,
            borderColor: '#009F93',
            borderWidth: 2,
            borderRadius: 10,
          }}>
          <View style={styles.container2}>
            <Text style={styles.titleText}> Location : </Text>
            <Text style={styles.detailText}> {userData.location} </Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.titleText}> Date of Birth </Text>
            <Text style={styles.detailText}> {userData.dateOfBirth} </Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.titleText}> Email </Text>
            <Text style={styles.detailText}> {user.email} </Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.titleText}> Phone Number </Text>
            <Text style={styles.detailText}> {user.phoneNumber} </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => logout()}>
          <View
            style={{
              // marginTop: 20,
              margin: 20,
              padding: 20,
              borderColor: '#009F93',
              borderWidth: 2,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#009F93',
                fontSize: 20,
              }}>
              logout
            </Text>
          </View>
        </TouchableOpacity>
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
    // justifyContent:"space-around",
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'flex-start',
    // margin: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  userHeader: {
    flexDirection: 'row',
    margin: 40,
    // flexWrap: 'wrap',
  },
  normalText: {
    fontSize: 35,
    color: '#009F93',
    flexWrap: 'wrap',
    fontWeight: '100',
    fontFamily: 'Comfortaa',
  },
  titleText: {
    fontSize: 15,
    color: '#009F93',
    letterSpacing: 5,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  nameContainer: {
    fontSize: 10,
    // paddingLeft: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 40,
    fontFamily: 'Comfortaa',
    color: '#009F93',
    letterSpacing: 4.9,
    fontWeight: '100',
  },
  detailText: {
    color: '#037171',
    fontSize: 15,
    letterSpacing: 5,
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
  },
};
