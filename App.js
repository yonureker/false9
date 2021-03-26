import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
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
      <SafeAreaView style={{flex: 1, backgroundColor: '#1098AE'}}>
        <NavigationContainer>
          {user ? <BottomTabNavigator /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
