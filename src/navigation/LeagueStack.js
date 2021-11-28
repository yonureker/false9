import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScaledSheet, scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LeaguesHome from '../screens/League/LeaguesHome';
import CreateLeague from '../screens/League/CreateLeague';
import JoinLeague from '../screens/League/JoinLeague';
import LeagueDetails from '../screens/League/LeagueDetails';
import SearchLeague from '../screens/League/SearchLeague';
import HeaderRightIcon from '../components/League/HeaderRightIcon';

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
        name="Leagues Home"
        component={LeaguesHome}
        options={{
          headerLeft: () => (
            <View style={styles.iconContainer}>
              <Pressable
                style={styles.iconContainer}
                onPress={() => navigation.navigate('Search League')}>
                <AntDesign name="search1" size={scale(20)} color="white" />
                <Text style={styles.text}>Search</Text>
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
      <Stack.Screen name="Search League" component={SearchLeague} />
      <Stack.Screen
        name="League Details"
        component={LeagueDetails}
        options={{
          headerRight: () => <HeaderRightIcon />,
        }}
      />
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
    paddingLeft: '5@s',
  },
  rightContainer: {
    paddingRight: '10@s',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '10@s',
    color: 'white',
  },
});
