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

const backgroundImage = require('../../../assets/false9_background.png');
const logo = require('../../../assets/false9_logo.png');

const SignIn = ({navigation}) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={[styles.container, styles.logo]}>
        <Image source={logo} style={styles.appLogo} />
      </View>
      <View style={[styles.container, styles.form]}>
        <View>
          <Text style={styles.smallText}>Enter phone number to sign in</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter phone number"
            onChangeText={(number) => setPhoneNumber(number)}
            style={styles.textInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => signInUser()}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.smallText}>
            Don't have an account?{' '}
            <Text
              style={styles.textWithUnderline}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.footer}></View>
    </ImageBackground>
  );
};

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 2,
  },
  appLogo: {
    width: '250@ms',
    height: '100@ms',
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
    borderRadius: '5@s',
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
  textWithUnderline: {
    textDecorationLine: 'underline',
  },
});
