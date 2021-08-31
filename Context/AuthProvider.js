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
        // regesterNewUser: async (email, password , birthDay ) => {
        //     try {
        //         await auth().crea
        //       // setUser(auth().currentUser);
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   },

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
