import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, PixelRatio} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';

import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

Amplify.configure(config);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setCurrentUser(user);
    } catch (error) {
      // do nothing
    }
  };

  // check if user logged in
  useEffect(() => {
    checkUser();
    console.log(PixelRatio.get());
    console.log(PixelRatio.getPixelSizeForLayoutSize(100));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />

      <NavigationContainer>
        {currentUser ? <BottomTabNavigator /> : <AuthStack />}
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
