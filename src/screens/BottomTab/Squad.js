import React, {useEffect, useState} from 'react';
import {ImageBackground, Modal, Pressable, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {ScaledSheet} from 'react-native-size-matters';
import PlayerSelection from '../../components/Squad/Player';
import Bench from '../../components/Squad/Bench';

const backgroundImage = require('../../../assets/soccer_field.png');

const Squad = ({navigation}) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [formation, setFormation] = useState('4 - 4 - 2');
  // const [goalkeepers, setGoalkeepers] = useState([{}]);
  const [defenders, setDefenders] = useState([{}, {}, {}, {}]);
  const [midfielders, setMidfielders] = useState([{}, {}, {}, {}]);
  const [forwards, setForwards] = useState([{}, {}]);

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
    setFormation(text);
    setDropDownVisible(!dropDownVisible);
  };

  useEffect(() => {
    const mappedFormation = formation.split(' - ');

    setDefenders(Array(Number(mappedFormation[0])).fill({}));
    setMidfielders(Array(Number(mappedFormation[1])).fill({}));
    setForwards(Array(Number(mappedFormation[2])).fill({}));
  }, [formation]);

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
      <Pressable
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }>
        <Text>Sign Out</Text>
      </Pressable>
      <View style={{flexDirection: 'row', flex: 1}}>
        <PlayerSelection />
      </View>
      <View style={styles.playerRow}>
        {defenders.map((defender, index) => (
          <PlayerSelection key={index} />
        ))}
      </View>
      <View style={styles.playerRow}>
        {midfielders.map((midfielder, index) => (
          <PlayerSelection key={index} />
        ))}
      </View>
      <View style={styles.playerRow}>
        {forwards.map((forward, index) => (
          <PlayerSelection key={index} />
        ))}
      </View>
      <Bench />
    </ImageBackground>
  );
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
