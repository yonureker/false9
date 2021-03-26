import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Budget from '../screens/Budget';
import {ScaledSheet, scale} from 'react-native-size-matters';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: scale(15)},
  headerTitleAlign: 'center',
};

const BudgetStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Budget" screenOptions={headerStyle}>
      <Stack.Screen name="Budget" component={Budget} />
    </Stack.Navigator>
  );
};

export default BudgetStack;

const styles = ScaledSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    paddingLeft: '20@s',
  },
  rightContainer: {
    paddingRight: '20@s',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '10@s',
    color: 'white',
  },
});
