import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ScaledSheet} from 'react-native-size-matters';

const TeamName = () => {
  const [initializing, setInitializing] = useState(false);
  const [teamName, setTeamName] = useState('');

  const backgroundImage = require('../../assets/false9_background.png');
  const logo = require('../../assets/false9_logo.png');

  const addTeamName = async () => {
    // show loading icon
    setInitializing(true);
    try {
      const userDoc = firestore().collection('users').doc(user.uid);

      await userDoc.set({teamName: teamName, leagues: []}, {merge: true});

      // remove loading icon

      setTeamNameSaved(true);
    } catch (error) {
      Alert.alert(error.message);
    }
    setInitializing(false);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.imageBackgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.appLogo} resizeMode="contain" />
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.largeText}>Pick your team name</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Team name"
            onChangeText={(text) => setTeamName(text)}
            style={styles.textInput}
            maxLength={25}
          />
        </View>
        <View>
          <Text style={styles.smallText}>Min 3 & Max 25 characters</Text>
          <Text style={styles.smallText}>Team name must be unique</Text>
        </View>

        <View style={styles.button}>
          <Pressable onPress={() => addTeamName()}>
            <Text style={styles.buttonText}>Confirm Team</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer} />
    </ImageBackground>
  );
};

export default TeamName;

const styles = ScaledSheet.create({
  imageBackgroundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '300@ms',
    maxHeight: '250@ms',
  },
  textInputContainer: {
    height: '40@ms',
    width: '300@ms',
    backgroundColor: '#7ABDC9',
    flexDirection: 'row',
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
    fontSize: '14@ms',
  },
  footer: {
    flex: 0.5,
  },
  largeText: {
    color: 'white',
    fontSize: '18@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
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
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    minWidth: '180@ms',
    color: 'white',
  },
  icon: {
    paddingLeft: '10@ms',
    paddingRight: '10@ms',
  },
});
