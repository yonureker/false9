/* eslint-disable react-hooks/exhaustive-deps */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import TeamName from './src/screens/TeamName';
import createNewUser from './src/util/createNewUser';
import rounds from './src/util/Rounds';

const backgroundImage = require('./assets/false9_background.png');
const logo = require('./assets/false9_logo.png');

const App = () => {
  // const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(false);
  const [teamNameSaved, setTeamNameSaved] = useState(false);
  const [teamName, setTeamName] = useState('');

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // listen for log in / log out
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // fetch the start time for each week
  useEffect(() => {
    if (user) {
      fetchRoundTimeStamps();
    }
  }, [user]);

  // update user slice of state when user logs in and check if user has created a team
  function onAuthStateChanged(userData) {
    if (userData) {
      dispatch({type: 'RECEIVE_USER_DATA', payload: userData._user});
      checkUserOnFirestore(userData);
    }
  }

  const checkUserOnFirestore = async (user) => {
    setInitializing(true);
    const doc = await firestore().collection('users').doc(user.uid).get();

    setInitializing(false);

    if (doc.exists) {
      const data = doc.data();

      if (data.teamName) {
        setTeamNameSaved(true);
      }
    } else {
      setTeamNameSaved(false);
      createNewUser(user);
    }
  };

  const fetchRoundTimeStamps = async () => {
    // get deadlines for each round
    const docRef = await firestore().collection('deadlines').doc('v1').get();
    const deadlines = docRef.data();

    // get current date
    const currentDate = Math.floor(Date.now() / 1000);
    let index;

    // find the index of current date in a given deadline array.
    for (let i = 0; i < deadlines.unixStamps.length; i++) {
      if (currentDate < deadlines.unixStamps[i]) {
        index = i;
        break;
      }
    }

    dispatch({type: 'GET_ROUND', payload: rounds[index]});
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

  if (user && !teamNameSaved) {
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
