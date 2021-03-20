import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/SignIn';
import Verify from '../screens/Auth/Verify';
import Squad from '../screens/BottomTab/Squad';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: 20},
  headerTitleAlign: 'center',
};

const SquadStack = () => {
  return (
    <Stack.Navigator initialRouteName="Squad" screenOptions={headerStyle}>
      <Stack.Screen name="Squad" component={Squad} />
    </Stack.Navigator>
  );
};

export default SquadStack;
