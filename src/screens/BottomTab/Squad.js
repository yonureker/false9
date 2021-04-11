import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';

import {ScaledSheet} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import PlayerSelection from '../../components/Squad/Player';
import Bench from '../../components/Squad/Bench';
import {useDispatch, useSelector} from 'react-redux';

const backgroundImage = require('../../../assets/soccer_field.png');

const Squad = ({navigation}) => {
  const dispatch = useDispatch();
  const squad = useSelector((state) => state.squad);
  const {players, formation} = squad;

  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [starterGoalkeeper, setStarterGoalkeeper] = useState(null);
  const [starterDefenders, setStarterDefenders] = useState(null);
  const [starterMidfielders, setStarterMidfielders] = useState(null);
  const [starterForwards, setStarterForwards] = useState(null);
  const [bench, setBench] = useState(null);

  const formationOptions = [
    '3 - 4 - 3',
    '3 - 5 - 2',
    '4 - 3 - 3',
    '4 - 4 - 2',
    '4 - 5 - 1',
    '5 - 3 - 2',
    '5 - 4 - 1',
  ];

  const updateFormation = (text) => {
    // setFormation(text);
    setDropDownVisible(!dropDownVisible);
  };

  useEffect(() => {
    const mappedFormation = formation.split(' - ');

    const goalkeepers = 1;
    const defenders = Number(mappedFormation[0]);
    const midfielders = Number(mappedFormation[1]);
    const forwards = Number(mappedFormation[2]);

    setStarterGoalkeeper(players.slice(0, 1));
    setStarterDefenders(players.slice(1, 1 + defenders));
    setStarterMidfielders(
      players.slice(1 + defenders, 1 + defenders + midfielders),
    );
    setStarterForwards(
      players.slice(
        1 + defenders + midfielders,
        1 + defenders + midfielders + forwards,
      ),
    );
    setBench(players.slice(12));
  }, [formation, players]);

  if (players.length === 15) {
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        <View style={styles.tacticsContainer}>
          <Pressable onPress={() => setDropDownVisible(!dropDownVisible)}>
            <Text style={styles.tacticsText}>Formation</Text>
          </Pressable>
          {dropDownVisible &&
            formationOptions.map((elem, index) => (
              <Pressable onPress={() => updateFormation(elem)} key={index}>
                <Text style={styles.tacticsText}>{elem}</Text>
              </Pressable>
            ))}
        </View>
        <Pressable
          style={styles.addBudgetContainer}
          onPress={() => navigation.navigate('Budget')}>
          <Text style={styles.tacticsText}>Add Budget</Text>
        </Pressable>
        <View style={styles.playerRow}>
          {starterGoalkeeper.map((goalkeeper, index) => (
            <PlayerSelection key={index} position="Goalkeeper" index={index} />
          ))}
        </View>
        <View style={styles.playerRow}>
          {starterDefenders.map((defender, index) => (
            <PlayerSelection
              key={index}
              position="Defender"
              index={index + 1}
            />
          ))}
        </View>
        <View style={styles.playerRow}>
          {starterMidfielders.map((midfielder, index) => (
            <PlayerSelection
              key={index}
              position="Midfielder"
              index={index + 1 + starterDefenders.length}
            />
          ))}
        </View>
        <View style={styles.playerRow}>
          {starterForwards.map((forward, index) => (
            <PlayerSelection
              key={index}
              position="Forward"
              index={
                index + 1 + starterDefenders.length + starterMidfielders.length
              }
            />
          ))}
        </View>
        <Bench />
      </ImageBackground>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default Squad;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerRow: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
  },
  tacticsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#C4C4C4',
    borderBottomRightRadius: '10@ms',
    zIndex: 99,
  },
  addBudgetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#C4C4C4',
    borderBottomLeftRadius: '10@ms',
  },
  tacticsText: {
    paddingHorizontal: '20@s',
    paddingVertical: '2@ms',
    fontSize: '12@s',
    fontFamily: 'LexendDeca-Regular',
  },
});
