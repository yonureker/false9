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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(userData) {
    if (userData) {
      setUser(userData);
      checkUserOnFirestore(userData);
      dispatch({type: 'RECEIVE_USER_DATA', payload: userData._user});
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

      firestore().collection('users').doc(user.uid).set({uid: user.uid});
    }
  };

  const addTeamNameOnFirestore = async () => {
    setInitializing(true);
    await firestore()
      .collection('users')
      .doc(user.uid)
      .set({teamName: teamName}, {merge: true});

    setInitializing(false);
    setTeamNameSaved(true);
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
            <Text style={styles.smallText}>Pick your team name</Text>
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
            <Text style={styles.smallText}>Pick your team name</Text>
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
  smallText: {
    color: 'white',
    fontSize: '18@ms',
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
