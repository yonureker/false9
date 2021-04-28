import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import auth from '@react-native-firebase/auth';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

const backgroundImage = require('./assets/false9_background.png');
const logo = require('./assets/false9_logo.png');

const App = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(false);
  const [teamNameSaved, setTeamNameSaved] = useState(false);
  const [teamName, setTeamName] = useState(null);

  const dispatch = useDispatch();

  const rounds = [
    'Group stage - Matchday 1',
    'Group stage - Matchday 2',
    'Group stage - Matchday 3',
    'Round of 16',
    'Quarter Final',
    'Semi Final',
    'Final',
  ];

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    fetchRoundTimeStamps();
  }, []);

  function onAuthStateChanged(userData) {
    if (userData) {
      dispatch({type: 'RECEIVE_USER_DATA', payload: userData._user});
      setUser(userData);
      checkUserOnFirestore(userData);
    } else {
      setUser(null);
      dispatch({type: 'RESET_USER_DATA'});
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

      try {
        const batch = firestore().batch();

        // add user to users collection
        const newUserRef = firestore().collection('users');
        batch.set(newUserRef.doc(user.uid), {
          uid: user.uid,
          createdOn: firestore.FieldValue.serverTimestamp(),
          leagues: [],
          points: {
            totalPoints: 0,
            'Group stage - Matchday 1': 0,
            'Group stage - Matchday 2': 0,
            'Group stage - Matchday 3': 0,
            'Round of 16': 0,
            'Quarter Final': 0,
            'Semi Final': 0,
            Final: 0,
          },
        });

        const userRef = firestore().collection('users').doc(user.uid);
        rounds.map((round) => {
          batch.set(userRef.collection('squads').doc(round), {
            players: Array(15).fill({}),
            value: 0,
            points: 0,
            formation: '4 - 4 - 2',
            budget: {
              totalBudget: 75000000,
            },
          });
        });

        await batch.commit();
        console.log('batch write success');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addTeamNameOnFirestore = async () => {
    setInitializing(true);
    await firestore()
      .collection('users')
      .doc(user.uid)
      .set({teamName: teamName, leagues: []}, {merge: true});

    setInitializing(false);
    setTeamNameSaved(true);
  };

  const fetchRoundTimeStamps = async () => {
    // get deadlines for each round
    const docRef = await firestore().collection('deadlines').doc('v1').get();
    const deadlines = docRef.data();

    // get current date
    const currentDate = Math.floor(Date.now() / 1000);
    let index;

    // find the index of current date in a given deadline array
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
            <Pressable onPress={() => addTeamNameOnFirestore()}>
              <Text style={styles.buttonText}>Confirm Team</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}></View>
      </ImageBackground>
    );
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

export default App;

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
