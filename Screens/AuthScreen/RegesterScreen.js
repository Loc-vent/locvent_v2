import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import LogoContainer from '../../components/LogoContainer';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../Context/Store';
import {AuthContext} from '../../Context/AuthProvider';
export default function RegesterScreen() {
  const [state, setState] = useContext(Context);

  const {user , register} = useContext(AuthContext);

  const [date, setDate] = useState(new Date());
  const [Gender, setGender] = useState();
  const [newUserForm, setNewUserForm] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    birthdate: date,
    gender: Gender,
  });

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  //   const navigation = useNavigation();
  //   const layout = useWindowDimensions();

  function randomUserId(max) {
    return;
  }

  console.log('user', user);
  function handleNewUserRegestration(name, value) {
    setState({
      ...state,
      user2: {
        ...state.user2,
        id: Math.floor(Math.random() * 8000),
        [name]: value,
      },
    });
  }

  function regesterandLogin() {
    setState({
      ...state,
      loggedInUser: state.user2,
      isLoggedIn: true,
    });
  }
  // console.log(' regesterd user ', state.loggedInUser, state.isLoggedIn);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <LogoContainer />
      </View>
      <ScrollView>
        <View style={styles.fontContainer}>
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="first name"
            onChangeText={firstName => setName(firstName)}
          />
          {/* <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="last name"
            onChangeText={lastNmae =>
              handleNewUserRegestration('lastName', lastNmae)
            }
          />
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="user name"
            onChangeText={userName =>
              handleNewUserRegestration('userNmae', userName)
            }
          /> */}
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="Password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="confirm password"
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              handleNewUserRegestration('confirm password', confirmPassword)
            }
          />

          {/* <TextInput
            theme={styles.inputStyle}
            autoCompleteType="tel"
            keyboardType="numeric"
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="Phone Number"
            onChangeText={phoneNumber =>
              handleNewUserRegestration('phoneNumber', phoneNumber)
            }
          /> */}

          <View>
            <DatePicker
              style={{
                marginTop: 20,
                marginBottom: 10,
              }}
              mode="date"
              collapsable={true}
              textColor="#009F93"
              date={date}
              onDateChange={setDate =>
                handleNewUserRegestration('birthDate', setDate)
              }
            />
            <Text
              style={{
                fontSize: 20,
                color: '#009F93',
                marginTop: 10,
                marginBottom: 10,
              }}>
              {' '}
              birthday
            </Text>
          </View>
        </View>

        {/* <View style={styles.fontContainer}>
          <Picker
            style={{
              height: 50,
              color: '#009F93',
              marginTop: 10,
            }}
            selectedValue={Gender}
            onValueChange={(itemValue, itemIndex) =>
              setGender(itemValue) &&
              handleNewUserRegestration('gender', itemValue)
            }>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View> */}
      </ScrollView>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() =>
          register(name, password) && console.log('regester clicked ')
        }>
        <Text
          style={{
            color: '#009F93',
            fontSize: 30,
            letterSpacing: 7,
            textAlign: 'center',
          }}>
          {' '}
          Regester{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  logoContainer: {
    marginBottom: 60,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  fontContainer: {},
  inputStyle: {
    colors: {
      text: '#009F93',
      accent: '#009F93',
      primary: '#009F93',
      placeholder: '#009F93',
      background: 'transparent',
    },
  },
  loginButton: {
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 1,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 2,
    paddingTop: 2,
    borderColor: '#009F93',
    borderRadius: 90,
  },

  footerContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footertext: {
    fontSize: 15,
    color: '#02C3BD',
  },
};
