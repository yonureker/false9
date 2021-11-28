/* eslint-disable react-hooks/exhaustive-deps */
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import TeamName from './src/screens/TeamName';
import createNewUser from './src/util/createNewUser';

const backgroundImage = require('./assets/false9_background.png');
const logo = require('./assets/false9_logo.png');

const App = () => {
  // const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState(auth().currentUser);
  const referrerID = useRef(null);

  const teamName = useSelector((state) => state.user.teamName);

  const dispatch = useDispatch();

  // update user slice of state when user logs in and check if user has set a team name
  function onAuthStateChanged(userData) {
    setUser(userData);
    if (userData) {
      dispatch({type: 'RECEIVE_SESSION_DATA', payload: userData._user});
      checkUserOnFirestore(userData);
    }
  }

  // listen for log in / log out
  useLayoutEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        if (link !== null) {
          referrerID.current = link.url.split('=').pop();
        }
      });
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const checkUserOnFirestore = async (user) => {
    setInitializing(true);
    const doc = await firestore().collection('users').doc(user.uid).get();

    if (doc.exists) {
      const data = doc.data();

      if (data.teamName !== null) {
        fetchUserData(user);
      }
    } else {
      createNewUser(user, referrerID.current);
    }
    setInitializing(false);
  };

  const fetchUserData = async (user) => {
    const userRef = await firestore().collection('users').doc(user.uid).get();
    const userDetails = userRef.data();

    dispatch({type: 'RECEIVE_USER_DATA', payload: userDetails});
  };

  if (initializing) {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.imageBackgroundContainer}>
        <ActivityIndicator size="large" color="white" />
      </ImageBackground>
    );
  }

  if (user && teamName === null) {
    return <TeamName />;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          {user ? <BottomTabNavigator /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1098AE',
  },
  imageBackgroundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
