import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {ScaledSheet} from 'react-native-size-matters';

const backgroundImage = require('../../../assets/false9_background.png');
const logo = require('../../../assets/false9_logo.png');

const PhoneAuth = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withCallingCodeButton, setWithCallingCodeButton] = useState(true);
  const [callingCode, setCallingCode] = useState('+1');

  // Phone confirmation
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(number) {
    const confirmation = await auth().signInWithPhoneNumber(number);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      Alert.alert('Invalid code. Try again or resend the code..');
    }
  }

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setCallingCode('+' + country.callingCode[0]);
  };

  const setFormattedPhoneNumber = (number) => {
    const newString = number.replace(/\D/g, '');
    setPhoneNumber(newString);
  };

  if (!confirm) {
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.appLogo} resizeMode="contain" />
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.smallText}>
              Select your country by pressing on the flag and then enter your
              phone number.
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <CountryPicker
              {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton,
                withAlphaFilter,
                withCallingCode,
                // withCallingCodeButton,
                withEmoji,
                onSelect,
              }}
            />
            <TextInput
              onChangeText={(number) => setCallingCode(number)}
              value={callingCode}
              style={[styles.textInput, {minWidth: 25}]}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Enter phone number*"
              onChangeText={(number) => setFormattedPhoneNumber(number)}
              style={styles.textInput}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => signInWithPhoneNumber(callingCode + phoneNumber)}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}></View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.appLogo} resizeMode="contain" />
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.largeText}>
            Enter the verification code sent to {callingCode + phoneNumber}
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={code}
            placeholder="Enter verification code"
            onChangeText={(text) => setCode(text)}
            style={styles.textInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => confirmCode()}>
            <Text style={styles.buttonText}>Confirm Code</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.smallText}>
            Not received the SMS?{' '}
            <Text
              onPress={() => signInWithPhoneNumber(callingCode + phoneNumber)}
              style={styles.textWithUnderline}>
              Resend Code.
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.smallText}>
            Need to update phone number?{' '}
            <Text
              onPress={() => setConfirm(null)}
              style={styles.textWithUnderline}>
              Update.
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.footer}></View>
    </ImageBackground>
  );
};

export default PhoneAuth;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  appLogo: {
    width: '250@ms',
    height: '100@ms',
  },
  form: {
    flex: 3.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '300@ms',
    maxHeight: '300@ms',
  },
  textInputContainer: {
    height: '40@ms',
    width: '300@ms',
    backgroundColor: '#7ABDC9',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: '10@s',
  },
  button: {
    width: '150@ms',
    height: '50@ms',
    backgroundColor: '#0D7D8F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '20@s',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
    fontSize: '16@ms',
  },
  footer: {
    flex: 0.5,
  },
  smallText: {
    color: 'white',
    fontSize: '14@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
  },
  largeText: {
    color: 'white',
    fontSize: '16@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
  },
  textInput: {
    fontSize: '16@ms',
    textAlign: 'left',
    fontFamily: 'LexendDeca-Regular',
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    minWidth: '180@ms',
    color: 'black',
    // paddingLeft: '5@s',
  },
  textWithUnderline: {
    textDecorationLine: 'underline',
  },
  facebookColor: {
    backgroundColor: '#3b5998',
  },
  googleColor: {
    backgroundColor: '#dd4b39',
  },
  appleColor: {
    backgroundColor: '#000',
  },
  phoneNumberColor: {
    backgroundColor: '#35A654',
  },
});
