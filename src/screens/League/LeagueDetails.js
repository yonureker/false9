import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {scale, ScaledSheet} from 'react-native-size-matters';
import faker from 'faker';
import {useSelector} from 'react-redux';

const LeagueDetails = ({navigation, route}) => {
  const [leagueUsers, setLeagueUsers] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const leagueID = useSelector((state) => state.selection.league);
  //
  const fetchLeagueMembers = async () => {
    const usersSnaphot = await firestore()
      .collection('users')
      .where('leagues', 'array-contains', leagueID)
      .orderBy('points.totalPoints', 'desc')
      .limit(20)
      .get();

    const users = usersSnaphot.docs.map((doc) => doc.data());
    setLastVisible(usersSnaphot.docs[usersSnaphot.docs.length - 1]);
    setLeagueUsers((prevState) => [...prevState, ...users]);
  };

  const fetchMoreLeagueMembers = async () => {
    if (leagueUsers.length >= 20) {
      console.log('runned more');
      const usersSnaphot = await firestore()
        .collection('users')
        .where('leagues', 'array-contains', leagueID)
        .orderBy('points.totalPoints', 'desc')
        .startAt(lastVisible)
        .limit(20)
        .get();

      const users = usersSnaphot.docs.map((doc) => doc.data());
      setLastVisible(usersSnaphot.docs[usersSnaphot.docs.length - 1]);
      setLeagueUsers((prevState) => [...prevState, ...users]);
    } else {
      console.log('end');
    }
  };

  const listHeader = () => (
    <Pressable
      // onPress={() =>
      //   navigation.navigate('League Details', {
      //     leagueID: leagueIDs[index],
      //   })
      // }
      style={[styles.listItem, {marginTop: 0}]}>
      <View style={styles.flexOne}>
        <Text style={[styles.alignEnd, styles.itemText]}>Rank</Text>
      </View>
      <View style={styles.flexTwo}>
        <Text style={[styles.alignStart, styles.itemText]}>Team Name</Text>
      </View>
      <View style={styles.flexOne}>
        <Text style={[styles.alignEnd, styles.itemText]}>Total Points</Text>
      </View>
      <View style={styles.flexOne}>
        <Text style={[styles.alignEnd, styles.itemText]}>GS - 1</Text>
      </View>
    </Pressable>
  );

  useEffect(() => {
    fetchLeagueMembers();
  }, []);
  //
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={leagueUsers}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={listHeader}
          stickyHeaderIndices={[0]}
          onEndReachedThreshold={0}
          initialNumToRender={20}
          onEndReached={() => fetchMoreLeagueMembers()}
          renderItem={({item, index}) => (
            <Pressable style={styles.listItem}>
              <View style={styles.flexOne}>
                <Text style={[styles.alignEnd, styles.itemText]}>
                  {index + 1}
                </Text>
              </View>
              <View style={styles.flexTwo}>
                <Text style={[styles.alignStart, styles.itemText]}>
                  {item.teamName}
                </Text>
              </View>
              <View style={styles.flexOne}>
                <Text style={[styles.alignEnd, styles.itemText]}>
                  {item.points.totalPoints}
                </Text>
              </View>
              <View style={styles.flexOne}>
                <Text style={[styles.alignEnd, styles.itemText]}>
                  {item.points.Final}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default LeagueDetails;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    padding: '10@s',
  },
  listContainer: {
    alignSelf: 'stretch',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: '10@s',
    backgroundColor: 'white',
    // height: '50@s',
    marginTop: '5@s',
    borderRadius: 10,
  },
  itemText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
    paddingHorizontal: '5@s',
    // paddingLeft: '10@s',
  },
  flexTwo: {
    flex: 2.5,
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
  },
});
