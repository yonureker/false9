import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const leaderboardData = [
  {name: 'Leaderboard', numberOfTeams: 'Teams', myRanking: 'My Ranking'},
  {name: 'Global', numberOfTeams: 2383914, myRanking: 12853},
  {name: 'United States', numberOfTeams: 32494, myRanking: 763},
];

const leagueData = [
  {name: 'League Name', numberOfTeams: 'Teams', myRanking: 'My Ranking'},
  {name: 'Red Devils', numberOfTeams: 45660, myRanking: 18},
  {name: 'Fantasy Gurus UK', numberOfTeams: 439, myRanking: 2},
  {name: 'Z Gen United', numberOfTeams: 1439339, myRanking: 38338},
  {name: 'Red Yellow Kings', numberOfTeams: 532244, myRanking: 3452},
];

const LeaguesHome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.categoryBar}>
        <MaterialCommunityIcons name="podium" size={scale(20)} color="white" />
        <Text style={styles.categoryText}>Leaderboards</Text>
      </View>
      <View style={styles.listContainer}>
        {leaderboardData.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.flexOne}>
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
          color="white"
        />
        <Text style={styles.categoryText}>My Leagues</Text>
      </View>
      <View style={styles.listContainer}>
        {leagueData.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.flexOne}>
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
    height: '30@s',
    backgroundColor: '#10B6D1',
    alignSelf: 'stretch',
    borderRadius: 5,
    paddingHorizontal: '10@s',
  },
  listContainer: {
    alignSelf: 'stretch',
    marginVertical: '10@s',
  },
  listItem: {
    flexDirection: 'row',
    borderBottomColor: '#E5DFDF',
    borderBottomWidth: 1,
    paddingVertical: '10@s',
  },
  categoryText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '14@s',
    paddingHorizontal: '10@s',
    color: 'white',
  },
  itemText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
  },
  listHeaderText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
  },
  flexOne: {
    flex: 1,
  },
  alignStart: {
    alignSelf: 'flex-start',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
});
