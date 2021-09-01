import React, {createContext, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

const APILINK = 'http://192.168.137.63:5000';

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
            // const requestOptions = {
            //   method: 'POST',
            //   headers: {'Content-Type': 'application/json'},
            //   body: JSON.stringify({username: username, password: password}),
            // };
            const requestOptions2 = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                UserName,
                PhoneNumber,
                FirstName,
                password,
                LastName,
                Gender,
                regionName,
                woreda,
                isexpert,
              }),
            };

            let urlcath = 'http://192.168.137.63:5000/api/user/registerUser';
            let response = await fetch(urlcath, requestOptions2);
            const json = await response.json();
            console.log('response form api', json);
            console.log('status form api', response.status);
            {
              response.status === 200 ? setUser(json) : null;
            }
            // let catchResponse = fetch(
            //   'http://192.168.137.63:5000/api/user/registerUser',
            //   {
            //     method: 'POST',
            //     headers: {
            //       Accept: 'application/json',
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //       UserName,
            //       PhoneNumber,
            //       FirstName,
            //       password,
            //       LastName,
            //       Gender,
            //       regionName,
            //       woreda,
            //       isexpert,
            //     }),
            //   },
            // )
            //   .then(response => response.json())
            //   .then(responseJSON => {
            //     console.log(responseJSON);
            //   });
          } catch (error) {
            console.log('regester error :', error);
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
            await
            //  auth().signOut();
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
