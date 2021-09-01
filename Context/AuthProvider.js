import React, {createContext, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        regesterWithOA: async (
          UserName,
          PhoneNumber,
          FirstName,
          password,
          LastName,
          Gender,
          regionName,
          woreda,
          isexpert,
        ) => {
          try {
            await fetch('http://192.168.25.169:5000/api/user/registerUser', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                UserName: {UserName},
                password: {password},
                PhoneNumber: {PhoneNumber},
                FirstName: {FirstName},
                LastName: {LastName},
                Gender: {Gender},
                regionName: {regionName},
                woreda: {woreda},
                isexpert: {isexpert},
              }),
            });
          } catch (error) {
            console.log('regesterrr', error);
          }
        },

        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            // setUser(auth().currentUser);
          } catch (error) {
            console.log(error);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            // setUser(auth().currentUser);
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            setUser(null);
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
