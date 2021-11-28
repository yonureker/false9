import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

const leaderboardData = [
  {name: 'Leaderboard', numberOfTeams: 'Teams', myRanking: 'My Ranking'},
  {name: 'Global', numberOfTeams: 2383914, myRanking: 12853},
  {name: 'United States', numberOfTeams: 32494, myRanking: 763},
];

const LeaguesHome = ({navigation}) => {
  const [leagueDetails, setLeagueDetails] = useState([]);
  const [leagueIDs, setLeagueIDs] = useState([]);
  const uid = useSelector((state) => state.session.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const snapshot = firestore()
        .collection('users')
        .doc(uid)
        .onSnapshot(async (doc) => {
          const userData = doc.data();
          setLeagueIDs(doc.data().leagues);

          dispatch({type: 'UPDATE_USER_LEAGUES', payload: doc.data().leagues});

          const leagueData = await Promise.all(
            userData.leagues.map(async (leagueID) => {
              const docRef = await firestore()
                .collection('leagues')
                .doc(leagueID)
                .get();

              return docRef.data();
            }),
          );

          setLeagueDetails(leagueData);
        });

      return () => snapshot();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, uid]);

  const navigateToLeagueDetails = (id) => {
    dispatch({type: 'UPDATE_LEAGUE_ID', payload: id});

    navigation.navigate('League Details');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.categoryBar}>
        <MaterialCommunityIcons name="podium" size={scale(20)} color="black" />
        <Text style={styles.categoryText}>Leaderboards</Text>
      </View>
      <View style={styles.listContainer}>
        {leaderboardData.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.flexTwo}>
              <Text style={[styles.alignStart, styles.itemText]}>
                {item.name}
              </Text>
            </View>
            <View style={styles.flexOne}>
              <Text style={[styles.alignEnd, styles.itemText]}>
                {item.numberOfTeams.toLocaleString()}
              </Text>
            </View>
            <View style={styles.flexOne}>
              <Text style={[styles.alignEnd, styles.itemText]}>
                {item.myRanking.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.categoryBar}>
        <MaterialCommunityIcons
          name="account-group"
          size={scale(20)}
          color="black"
        />
        <Text style={styles.categoryText}>My Leagues</Text>
      </View>
      <View style={styles.listContainer}>
        {leagueDetails.map((item, index) => (
          <Pressable
            onPress={() => navigateToLeagueDetails(leagueIDs[index])}
            key={index}
            style={styles.listItem}>
            <View style={styles.flexTwo}>
              <Text style={[styles.alignStart, styles.itemText]}>
                {item.leagueName}
              </Text>
            </View>
            <View style={styles.flexOne}>
              <Text style={[styles.alignEnd, styles.itemText]}>
                {item.teamCount.toLocaleString()}
              </Text>
            </View>
            <View style={styles.flexOne}>
              <Text style={[styles.alignEnd, styles.itemText]}>{8787654}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default LeaguesHome;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    padding: '10@s',
  },
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // height: '30@s',
    backgroundColor: '#E8E8E8',
    alignSelf: 'stretch',
    borderRadius: 10,
    padding: '10@s',
  },
  listContainer: {
    alignSelf: 'stretch',
    marginVertical: '10@s',
  },
  listItem: {
    flexDirection: 'row',
    padding: '10@s',
    backgroundColor: 'white',
    // height: '50@s',
    marginTop: '5@s',
    borderRadius: 10,
  },
  categoryText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '15@s',
    paddingHorizontal: '10@s',
    // color: '#5B5B71',
  },
  itemText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
    // paddingLeft: '10@s',
  },
  listHeaderText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
  },
  flexTwo: {
    flex: 2,
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
    justifyContent: 'center',
  },
  alignStart: {
    alignSelf: 'flex-start',
  },
  alignEnd: {
    alignSelf: 'flex-end',
    // paddingRight: '10@s',
  },
});
