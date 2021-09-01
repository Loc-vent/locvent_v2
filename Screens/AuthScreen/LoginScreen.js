import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import LogoContainer from '../../components/LogoContainer';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../Context/AuthProvider';

export default function LoginScreen() {
  const {logInWithOA} = useContext(AuthContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  console.log('userName ', userName, 'pass', password);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <LogoContainer />
      </View>
      <View style={styles.fontContainer}>
        <TextInput
          theme={styles.inputStyle}
          underlineColor="#009F93"
          underlineColorAndroid="#009F93"
          label="Username / Phone Number"
          value={userName}
          onChangeText={userName => setUserName(userName)}
        />

        <TextInput
          theme={styles.inputStyle}
          underlineColor="#009F93"
          underlineColorAndroid="#009F93"
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => logInWithOA(userName, password)}>
        <Text
          style={{
            color: '#009F93',
            fontSize: 20,
            letterSpacing: 7,
            textAlign: 'center',
          }}>
          {' '}
          login{' '}
        </Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.footertext}> forgot password </Text>
        </TouchableOpacity>
        <Text style={styles.footertext}>||</Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.footertext}>
            {' '}
            signup{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  logoContainer: {
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  pageContainer: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  fontContainer: {
    width: '70%',
  },
  inputStyle: {
    colors: {
      text: '#009F93',
      accent: '#ffffff',
      primary: '#009F93',
      placeholder: '#009F93',
      background: 'transparent',
    },
  },
  loginButton: {
    marginTop: 40,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 7,
    paddingTop: 7,
    borderColor: '#009F93',
    borderRadius: 90,
  },

  footerContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footertext: {
    fontSize: 15,
    color: '#02C3BD',
  },
};
