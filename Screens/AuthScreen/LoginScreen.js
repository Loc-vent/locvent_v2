import React from 'react';
import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import LogoContainer from '../../components/LogoContainer';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const [text, setText] = React.useState('');
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  // console.log(layout);
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
        onPress={() => navigation.navigate('Message')}>
        <Text
          style={{
            color: '#009F93',
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
          <Text style={styles.footertext}> forgot password </Text>
        </TouchableOpacity>
        <Text style={styles.footertext}>||</Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.footertext}>
            {' '}
            Sign up{' '}
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
