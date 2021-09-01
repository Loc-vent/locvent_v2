import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
// 02022424
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import LogoContainer from '../../components/LogoContainer';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../Context/Store';
import {AuthContext} from '../../Context/AuthProvider';
export default function RegesterScreen() {
  const {user, regesterWithOA} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    reenterPass: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    gender: 'Male',
    regionName: '',
    woreda: '',
    isexpert: false,
  });

  console.log('from form data', formData);
  const layout = useWindowDimensions();
  console.log('user', user);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <LogoContainer />
      </View>
      <ScrollView>
        <View
          style={{
            width: layout.width - 150,
          }}>
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="user name"
            onChangeText={userName =>
              setFormData({...formData, userName: userName})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="Password"
            secureTextEntry={true}
            onChangeText={password =>
              setFormData({...formData, password: password})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="re-enter password"
            secureTextEntry={true}
            onChange={reenterPass =>
              setFormData({...formData, reenterPass: reenterPass})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            autoCompleteType="tel"
            keyboardType="numeric"
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="Phone Number"
            onChangeText={phoneNumber =>
              setFormData({...formData, phoneNumber: phoneNumber})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            autoCompleteType="tel"
            // keyboardType="text"
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="first name "
            onChangeText={firstName =>
              setFormData({...formData, firstName: firstName})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            autoCompleteType="tel"
            // keyboardType="text"
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="last name "
            onChangeText={lastName =>
              setFormData({...formData, lastName: lastName})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            autoCompleteType="tel"
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="region"
            onChangeText={regionName =>
              setFormData({...formData, regionName: regionName})
            }
          />
          <TextInput
            theme={styles.inputStyle}
            autoCompleteType="tel"
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="woreda"
            onChangeText={woreda => setFormData({...formData, woreda: woreda})}
          />
          <View style={styles.fontContainer}>
            <Picker
              style={{
                height: 50,
                color: '#009F93',
                marginTop: 10,
              }}
              selectedValue={formData.gender}
              onValueChange={(itemValue, itemIndex) =>
                setFormData({...formData, gender: itemValue})
              }>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>

          <View style={styles.fontContainer}>
            <Picker
              style={{
                height: 50,
                color: '#009F93',
                marginTop: 10,
              }}
              selectedValue={formData.isexpert}
              onValueChange={(isExpert, itemIndex) =>
                setFormData({...formData, isexpert: isExpert})
              }>
              <Picker.Item label="expert" value={true} />
              <Picker.Item label="notexpert" value={false} />
            </Picker>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() =>
          regesterWithOA(
            formData.userName,
            formData.phoneNumber,
            // formData.reenterPass,
            formData.firstName,
            formData.password,
            formData.lastName,
            formData.gender,
            formData.regionName,
            formData.woreda,
            formData.isexpert,
          )
        }>
        <Text
          style={{
            color: '#009F93',
            fontSize: 20,
            letterSpacing: 7,
            textAlign: 'center',
          }}>
          register
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
  fontContainer: {
    // width: layout.width,
  },
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
