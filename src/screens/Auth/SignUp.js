import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, Image, Pressable} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

GoogleSignin.configure({
  webClientId:
    '721218036146-gtqfjiflqvvo1r2h2ha9r96ecp1s4te5.apps.googleusercontent.com',
});

const backgroundImage = require('../../../assets/false9_background.png');
const logo = require('../../../assets/false9_logo.png');

const SignUp = ({navigation}) => {
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.appLogo} resizeMode="contain" />
      </View>
      <View style={styles.form}>
        <Pressable
          style={[styles.textInputContainer, styles.appleColor]}
          onPress={() => Auth.federatedSignIn({provider: 'SignInWithApple'})}>
          <Icon name="apple" size={30} color="white" style={styles.icon} />
          <Text style={styles.textInput}>Sign Up with Apple</Text>
        </Pressable>
        <Pressable
          style={[styles.textInputContainer, styles.facebookColor]}
          onPress={() =>
            onFacebookButtonPress().then(() =>
              console.log('Signed in with Facebook!'),
            )
          }>
          <Icon name="facebook" size={30} color="white" style={styles.icon} />
          <Text style={styles.textInput}>Sign Up with Facebook</Text>
        </Pressable>
        <Pressable
          style={[styles.textInputContainer, styles.googleColor]}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }>
          <Icon name="google" size={30} color="white" style={styles.icon} />
          <Text style={styles.textInput}>Sign Up with Google</Text>
        </Pressable>
        <View>
          <Text style={styles.smallText}>
            By signing up, you agree to our{' '}
            <Text style={styles.textWithUnderline}>terms & conditions</Text>,{' '}
            <Text style={styles.textWithUnderline}>competition rules</Text> and
            acknowledge our{' '}
            <Text style={styles.textWithUnderline}>privacy notice</Text>.
          </Text>
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => Auth.federatedSignIn({provider: 'Google'})}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.smallText}>
            Already have an account?{' '}
            <Text
              style={styles.textWithUnderline}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.footer}></View>
    </ImageBackground>
  );
};

export default SignUp;

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
    flex: 0.5,
  },
  smallText: {
    color: 'white',
    fontSize: '14@ms',
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
    color: 'white',
  },
  textWithUnderline: {
    textDecorationLine: 'underline',
  },
  icon: {
    paddingLeft: '10@ms',
    paddingRight: '10@ms',
  },
  countryPicker: {
    paddingRight: '5@ms',
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
});
