import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IonIcons from 'react-native-vector-icons/dist/Ionicons';

import BudgetStack from '../navigation/BudgetStack';
import Stats from '../screens/BottomTab/Stats';
import More from '../screens/BottomTab/More';
import SquadStack from './SquadStack';
import LeagueStack from './LeagueStack';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Squad"
      tabBarOptions={{
        style: {
          backgroundColor: '#1098AE',
          height: scale(60),
        },
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
          tabBarIcon: () => <IonIcons name="shirt" size={scale(30)} />,
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetStack}
        options={{
          tabBarIcon: () => <FontAwesome name="money" size={scale(30)} />,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="leaderboard" size={scale(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={LeagueStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="trophy" size={scale(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="dots-horizontal" size={scale(30)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
