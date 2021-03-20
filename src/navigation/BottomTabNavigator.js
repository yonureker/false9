import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Budget from '../screens/BottomTab/Budget';
import Stats from '../screens/BottomTab/Stats';
import Leagues from '../screens/BottomTab/Leagues';
import More from '../screens/BottomTab/More';
import SquadStack from './SquadStack';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="SquadStack"
      tabBarOptions={{
        style: {backgroundColor: '#1098AE'},
        labelStyle: {color: 'white', fontFamily: 'LexendDeca-Regular', fontSize: 16},
      }}>
      <Tab.Screen name="Squad" component={SquadStack} />
      <Tab.Screen name="Budget" component={Budget} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Leagues" component={Leagues} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
