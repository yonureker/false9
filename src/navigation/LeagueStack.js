import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScaledSheet, scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import LeaguesHome from '../screens/LeaguesHome';
import CreateLeague from '../screens/CreateLeague';
import JoinLeague from '../screens/JoinLeague';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: scale(15)},
  headerTitleAlign: 'center',
};

const LeagueStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Leagues Home"
      screenOptions={headerStyle}>
      <Stack.Screen
        name="Leagues"
        component={LeaguesHome}
        options={{
          headerLeft: () => (
            <View style={styles.iconContainer}>
              <Pressable
                style={styles.iconContainer}
                onPress={() => navigation.navigate('Join League')}>
                <AntDesign name="search1" size={scale(20)} color="white" />
                <Text style={styles.text}>Join</Text>
              </Pressable>
            </View>
          ),
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRight: () => (
            <View style={styles.iconContainer}>
              <Pressable
                style={styles.iconContainer}
                onPress={() => navigation.navigate('Create League')}>
                <AntDesign name="plus" size={scale(20)} color="white" />
                <Text style={styles.text}>Create</Text>
              </Pressable>
            </View>
          ),
          headerRightContainerStyle: {paddingRight: 10},
        }}
      />
      <Stack.Screen name="Create League" component={CreateLeague} />
      <Stack.Screen name="Join League" component={JoinLeague} />
    </Stack.Navigator>
  );
};

export default LeagueStack;

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
    fontSize: '12@s',
    color: 'white',
  },
});
