import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LogoContainer from '../../components/LogoContainer';
import {TextInput} from 'react-native-paper';

export default function LoginScreen({navigation}) {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <LogoContainer />
      </View>
      <View style={styles.fontContainer}>
        <TextInput
          style={{
            marginBottom: 50,
          }}
          theme={styles.inputStyle}
          underlineColor="#009F93"
          underlineColorAndroid="#009F93"
          label="Username / Phone Number"
          value={text}
          onChangeText={text => setText(text)}
        />

        <TextInput
          theme={styles.inputStyle}
          underlineColor="#009F93"
          underlineColorAndroid="#009F93"
          label="Password"
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text
          style={{
            color: '#fff',
            fontSize: 40,
            letterSpacing: 7,
            textAlign: 'center',
          }}>
          {' '}
          Log in{' '}
        </Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.footertext}>forgot password </Text>
        </TouchableOpacity>
        <Text style={styles.footertext}>||</Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.footertext}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  logoContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    paddingBottom: 90,
    alignSelf: 'center',

    borderRadius: 60,
    borderBottomColor: '#222222',

    //shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
    backgroundColor: '#02C3BD',
    height: '10%',
    width: '40%',

    alignItems: 'center',
    justifyContent: 'space-around',

    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  headerStyle: {
    height: 90,
  },
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footertext: {
    fontSize: 20,
    color: '#02C3BD',
    fontWeight: '100',
  },
};
