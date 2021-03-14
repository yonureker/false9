import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../screens/Auth/SignUp';
import LogIn from '../screens/Auth/LogIn';
import Verify from '../screens/Auth/Verify';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: 20},
  headerTitleAlign: 'center',
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} options={headerStyle} />
      <Stack.Screen name="LogIn" component={LogIn} options={headerStyle} />
      <Stack.Screen name="Verify" component={Verify} options={headerStyle} />
    </Stack.Navigator>
  );
};

export default AuthStack;
