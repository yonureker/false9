import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import Flag from '../util/Flag';

const Fixtures = () => {
  const [fixtures, setFixtures] = useState(null);

  const fetchFixtures = async () => {
    try {
      const fixturesData = await firestore()
        .collection('fixtures')
        .doc('Group stage - Matchday 3')
        .get();

      setFixtures(fixturesData.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFixtures();
  }, []);

  if (fixtures === null) {
    return (
      <View style={styles.fixturesContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.fixturesHeaderContainer}>
        <Text style={styles.fixturesHeaderText}>Group stage - Matchday 1</Text>
      </View>
      <View style={styles.fixturesContainer}>
        {fixtures.matches.map((match, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.homeTeamNameContainer}>
              <Text style={styles.teamNameText}>{match.homeTeam}</Text>
            </View>
            <View style={styles.flagContainer}>
              <Flag
                country={match.homeTeam}
                width={scale(30)}
                height={scale(30)}
              />
            </View>
            <View style={styles.dashContainer}>
              <Text style={styles.teamNameText}>-</Text>
            </View>
            <View style={styles.flagContainer}>
              <Flag
                country={match.awayTeam}
                width={scale(30)}
                height={scale(30)}
              />
            </View>
            <View style={styles.awayTeamNameContainer}>
              <Text style={styles.teamNameText}>{match.awayTeam}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Fixtures;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fixturesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '5@s',
  },
  teamNameText: {
    fontSize: '14@s',
    fontFamily: 'LexendDeca-Regular',
    color: '#6B6161',
  },
  homeTeamNameContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  awayTeamNameContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  flagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  dashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fixturesHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c16565',
    borderBottomLeftRadius: '10@ms',
    borderBottomRightRadius: '10@ms',
  },
  fixturesHeaderText: {
    paddingHorizontal: '15@s',
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
    fontSize: '14@s',
  },
});
