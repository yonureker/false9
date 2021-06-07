import React, {useEffect} from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

import Squad from '../screens/BottomTab/Squad';
import Fixtures from '../screens/Fixtures';
import SelectPlayer from '../screens/SelectPlayer';
import BudgetStack from '../navigation/BudgetStack';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';

import SelectTeam from '../screens/SelectTeam';
import HeaderTitle from '../components/Squad/HeaderTitle';
import PlayerDetails from '../screens/PlayerDetails';
import checkEmptyObject from '../util/checkEmptyObject';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: scale(15)},
  headerTitleAlign: 'center',
};

const SquadStack = ({navigation}) => {
  const uid = useSelector((state) => state.user.uid);
  const squad = useSelector((state) => state.squad);
  const currentRound = useSelector((state) => state.round.current);
  const budgetItems = useSelector((state) => state.budget);
  const {value, players, captainIndex} = squad;

  const dispatch = useDispatch();

  const totalBudget = Object.values(budgetItems).reduce((a, b) => a + b, 0);
  const availableBudget = totalBudget - value;

  useEffect(() => {
    const fetchSquad = async () => {
      try {
        const squadRef = await firestore()
          .collection('users')
          .doc(uid)
          .collection('squads')
          .doc('Group stage - Matchday 1')
          .get();

        const squadData = squadRef.data();

        dispatch({type: 'RECEIVE_SQUAD_DATA', payload: squadData});
        dispatch({
          type: 'RECEIVE_BUDGET_DATA',
          payload: squadData.budget.items,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchSquad();
  }, []);

  const saveSquadToFirestore = async () => {
    // starter players array
    const starters = players.slice(0, 11);

    //if there is no captain, do not save
    if (captainIndex === null) {
      Alert.alert('Make sure you have a captain!');
      return;
    }

    // only save squad if the deadline is not passed for the round.

    // only save squad if there are 11 starters.
    if (starters.every((player) => !checkEmptyObject(player))) {
      try {
        await firestore()
          .collection('users')
          .doc(uid)
          .collection('squads')
          .doc('Group stage - Matchday 1')
          .set(squad);

        Alert.alert('Squad saved!');
      } catch (error) {
        console.log('error');
      }
    } else {
      Alert.alert('You need at least 11 starters to save your squad.');
    }
  };

  return (
    <Stack.Navigator initialRouteName="Squad" screenOptions={headerStyle}>
      <Stack.Screen
        name="Group Stage - Matchday 1"
        component={Squad}
        options={{
          headerLeft: () => (
            <View style={styles.iconContainer}>
              <Pressable
                style={styles.iconContainer}
                onPress={() => navigation.navigate('Fixtures')}>
                <AntDesign name="calendar" size={20} color="white" />
                <Text style={styles.text}>Fixtures</Text>
              </Pressable>
            </View>
          ),
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRight: () => (
            <Pressable
              style={styles.iconContainer}
              onPress={() => saveSquadToFirestore()}>
              <FontAwesome5 name="save" size={20} color="white" />
              <Text style={styles.text}>Save</Text>
            </Pressable>
          ),
          headerRightContainerStyle: {paddingRight: 10},
          headerTitle: (props) => (
            <HeaderTitle
              {...props}
              title={currentRound}
              subTitle={availableBudget}
              type="squad"
            />
          ),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Fixtures"
        component={Fixtures}
        options={{headerBackTitleVisible: false}}
      />
      <Stack.Screen name="Player Details" component={PlayerDetails} />
      <Stack.Screen
        name="Select Player"
        component={SelectPlayer}
        options={{
          headerRight: () => (
            <View style={[styles.iconContainer, {flexDirection: 'row'}]}>
              <Pressable
                onPress={() => navigation.navigate('Select Team')}
                style={[styles.iconContainer, {paddingRight: 10}]}>
                <FontAwesome name="filter" size={25} color="white" />
                <Text style={styles.text}>Teams</Text>
              </Pressable>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="sort" size={25} color="white" />
                <Text style={styles.text}>Sort</Text>
              </View>
            </View>
          ),
          headerRightContainerStyle: {paddingRight: 10},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name="Select Team" component={SelectTeam} />
      <Stack.Screen
        name="Budget"
        component={BudgetStack}
        options={{headerShown: false, headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default SquadStack;

const styles = ScaledSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 90,
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
