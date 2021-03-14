import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Squad from '../screens/BottomTab/Squad';
import Budget from '../screens/BottomTab/Budget';
import Stats from '../screens/BottomTab/Stats';
import Leagues from '../screens/BottomTab/Leagues';
import More from '../screens/BottomTab/More';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Squad">
      <Tab.Screen name="Squad" component={Squad} />
      <Tab.Screen name="Budget" component={Budget} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Leagues" component={Leagues} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
