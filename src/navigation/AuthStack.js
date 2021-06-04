 import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/SignIn';
import Verify from '../screens/Auth/Verify';
import PhoneAuth from '../screens/Auth/PhoneAuth';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: 20},
  headerTitleAlign: 'center',
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={headerStyle}>
      <Stack.Screen name="Signup / Login" component={SignUp} />
      <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Verify" component={Verify} />
    </Stack.Navigator>
  );
};

export default AuthStack;
