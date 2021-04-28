import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScaledSheet, scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import LeaguesHome from '../screens/League/LeaguesHome';
import CreateLeague from '../screens/League/CreateLeague';
import JoinLeague from '../screens/League/JoinLeague';
import LeagueDetails from '../screens/League/LeagueDetails';
import {useSelector} from 'react-redux';
import firestore, {firebase} from '@react-native-firebase/firestore';
import SearchLeague from '../screens/League/SearchLeague';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: scale(15)},
  headerTitleAlign: 'center',
};

const LeagueStack = ({navigation}) => {
  const uid = useSelector((state) => state.user.uid);
  const leagueID = useSelector((state) => state.selection.league);

  const leaveLeague = async (id) => {
    const docRef = firestore().collection('users').doc(uid);

    try {
      docRef
        .update({
          leagues: firebase.firestore.FieldValue.arrayRemove(id),
        })
        .then(navigation.navigate('Leagues Home'));
    } catch (error) {
      console.log(error);
    }
  };

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
      <Stack.Screen name="Search League" component={SearchLeague} />
      <Stack.Screen
        name="League Details"
        component={LeagueDetails}
        options={{
          headerRight: () => (
            <View style={styles.rightContainer}>
              <Pressable
                style={styles.iconContainer}
                onPress={() =>
                  Alert.alert(
                    'Are you sure?',
                    'Do you want to leave this league?',
                    [
                      {
                        text: 'Leave',
                        onPress: () => leaveLeague(leagueID),
                      },
                      {text: 'Cancel'},
                    ],
                  )
                }>
                <Ionicons name="exit" size={scale(20)} color="white" />
                <Text style={styles.text}>Leave</Text>
              </Pressable>
            </View>
          ),
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
