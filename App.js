import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 100);
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
