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

            let urlcath = `${APILINK}/api/user/registerUser`;
            let response = await fetch(urlcath, requestOptions2);
            const json = await response.json();
            console.log('register response form api :  ', json);
            console.log('status code  form api : ', response.status);
            {
              response.status === 200 ? setUser(json) : null;
            }
          } catch (error) {
            console.log('regester error :', error);
          }
        },

        logInWithOA: async (UserName, password) => {
          try {
            const requestOptions2 = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: UserName,
                password: password,
              }),
            };
            let urlcath = `${APILINK}/api/user/loginUser`;
            let response = await fetch(urlcath, requestOptions2);
            const json = await response.json();
            {
              response.status === 200 ? setUser(json) : null;
            }
            console.log('login response ', response.status);
          } catch (error) {
            console.log('login error from api  :', error);
          }
        },

        getUserReportHistory: async (userId, page) => {
          try {
            // const requestOptions2 = {
            //   method: 'GET',
            //   headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({
            //     username: UserName,
            //     password: password,
            //   }),
            // };
            let urlcath = `${APILINK}/api/report/getAll/1/${user._id}`;
            let response = await fetch(urlcath);
            const json = await response.json();
            // {
            //   response.status === 200 ? setUser(json) : null;
            // }
            console.log('report history response ', response.status);
          } catch (error) {
            console.log('report history :', error);
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
            await //  auth().signOut();
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
