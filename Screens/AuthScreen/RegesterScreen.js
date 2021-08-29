import React, {useState} from 'react';
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

export default function RegesterScreen() {
  const [text, setText] = React.useState('');
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [Gender, setGender] = useState();
  const layout = useWindowDimensions();
  // console.log(layout);
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
            label="Full Name"
            value={text}
            onChangeText={text => setText(text)}
          />
          <TextInput
            theme={styles.inputStyle}
            underlineColor="#009F93"
            underlineColorAndroid="#009F93"
            label="Phone Number"
            value={text}
            onChangeText={text => setText(text)}
          />

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
              onDateChange={setDate}
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

        <View style={styles.fontContainer}>
          <Picker
            style={{
              height: 50,
              color: '#009F93',
              marginTop: 10,
            }}
            selectedValue={Gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>
      </ScrollView>

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
    // alignContent: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  fontContainer: {
    // alignContent: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    marginBottom: 40,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 7,
    paddingTop: 7,
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
