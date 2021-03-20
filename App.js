import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
  }

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />

      <NavigationContainer>
        {user ? <BottomTabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
  },
});

export default App;
