import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import BudgetStack from '../navigation/BudgetStack';
import Stats from '../screens/BottomTab/Stats';
import Leagues from '../screens/BottomTab/Leagues';
import More from '../screens/BottomTab/More';
import SquadStack from './SquadStack';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LeagueStack from './LeagueStack';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Squad"
      tabBarOptions={{
        style: {backgroundColor: '#1098AE', height: scale(60)},
        labelStyle: {
          color: 'white',
          fontFamily: 'LexendDeca-Regular',
          fontSize: scale(12),
          paddingBottom: scale(5),
        },
      }}>
      <Tab.Screen
        name="Squad"
        component={SquadStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="soccer" size={scale(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="soccer" size={scale(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="soccer" size={scale(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={LeagueStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="soccer" size={scale(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="soccer" size={scale(30)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
