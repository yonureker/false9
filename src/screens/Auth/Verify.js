import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Auth} from 'aws-amplify';

const backgroundImage = require('../../../assets/false9_background.png');
const logo = require('../../../assets/false9_logo.png');

const Verify = ({route, navigation}) => {
  const [verificationCode, setVerificationCode] = useState(null);

  const {phoneNumber, username} = route.params;

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, verificationCode);
      console.log('Success');
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={[styles.container, styles.logo]}>
        <Image source={logo} />
      </View>
      <View style={[styles.container, styles.form]}>
        <View>
          <Text style={styles.smallText}>
            Please enter the verification code sent to {phoneNumber}
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter verification code"
            onChangeText={(code) => setVerificationCode(code)}
            style={styles.textInput}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.smallText}>
            Didn't receive the code? Resend code.
          </Text>
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => confirmSignUp()}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.smallText}>
            Phone number is incorrect? Update here.
          </Text>
        </View>
      </View>

      <View style={styles.footer}></View>
    </ImageBackground>
  );
};

export default Verify;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 2,
  },
  form: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '300@ms',
    maxHeight: '300@ms',
  },
  textInputContainer: {
    height: '50@ms',
    width: '300@ms',
    backgroundColor: '#7ABDC9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    width: '150@ms',
    height: '50@ms',
    backgroundColor: '#0D7D8F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
    fontSize: '16@ms',
  },
  footer: {
    flex: 1,
  },
  smallText: {
    color: 'white',
    fontSize: '14@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
  },
  textInput: {
    fontSize: '16@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
    width: '100%',
  },
});
