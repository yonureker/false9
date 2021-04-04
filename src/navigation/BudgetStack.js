import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Budget from '../screens/Budget';
import {scale} from 'react-native-size-matters';

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
