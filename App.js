import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>False9 App</Text>
        </View>
      </SafeAreaView>
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
