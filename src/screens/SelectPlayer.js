import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Pressable, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Flag from '../util/Flag';

const SelectPlayer = (props) => {
  const dispatch = useDispatch();
  const [playerData, setPlayerData] = useState(null);
  const squad = useSelector((state) => state.squad);
  const selectedIndex = useSelector((state) => state.selection.player);
  const {position, replacedPlayerPrice, replacedPlayerClub} =
    props.route.params;
  const {players, value, budget} = squad;

  const totalBudget = Object.values(budget.items).reduce((a, b) => a + b, 0);

  const addPlayertoSquad = (item) => {
    const {price, firstName, lastName, nationalTeam} = item.profile;
    //teamCount

    const teamCount = {};
    players.map((player) => {
      if (player.hasOwnProperty('nationalTeam')) {
        teamCount[player['nationalTeam']] =
          (teamCount[player['nationalTeam']] || 0) + 1;
      }
    });

    // if player is not replaced set it to 0.
    const changedPlayerPrice = replacedPlayerPrice || 0;
    const changedPlayerClub = replacedPlayerClub || null;

    // if there is not enough budget to add player;
    if (price > totalBudget - value + changedPlayerPrice) {
      return Alert.alert("You don't have enough budget to add this player");
    }

    //
    if (changedPlayerClub !== nationalTeam) {
      if (teamCount[nationalTeam] === 4) {
        return Alert.alert(
          "You can't have more than 4 players from the same team",
        );
      }
    }

    if (players.every((player) => !player.id || player.id !== item.key)) {
      dispatch({
        type: 'ADD_PLAYER',
        id: selectedIndex,
        payload: {
          firstName: firstName,
          lastName: lastName,
          nationalTeam: nationalTeam,
          price: price,
          id: item.key,
        },
      });

      dispatch({
        type: 'UPDATE_SQUAD_VALUE',
        payload: price - changedPlayerPrice,
      });

      props.navigation.navigate('Group Stage - Matchday 1');
    } else {
      Alert.alert('Twins?', 'You already have this player in your squad');
    }
  };

  const fetchPlayers = async () => {
    const docSnapshots = await firestore()
      .collection('players')
      .where('profile.position', '==', position)
      .get();

    const players = [];
    docSnapshots.forEach((doc) => players.push({...doc.data(), key: doc.id}));

    setPlayerData(players);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (playerData) {
    return (
      <View style={styles.container}>
        <FlatList
          data={playerData}
          keyExtractor={(item) => item.profile.lastName}
          style={{alignSelf: 'stretch'}}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingVertical: scale(10),
              }}>
              <View style={[{flex: 3}, styles.center]}>
                <Text style={styles.smallText}>Player</Text>
              </View>
              <View style={[{flex: 1.5}, styles.center]}>
                <Text style={styles.smallText}>Price</Text>
              </View>
              <View style={[{flex: 1}, styles.center]}>
                <Text style={styles.smallText}>Total Points</Text>
              </View>
              <View style={[{flex: 1}, styles.center]}>
                <Text style={styles.smallText}>Clean Sheets</Text>
              </View>
              <View style={[{flex: 1.5}, styles.center]}>
                <Text style={styles.smallText}>Goals Conceded</Text>
              </View>
            </View>
          }
          renderItem={({item}) => (
            <Pressable
              style={{
                flexDirection: 'row',
                borderTopColor: '#E5DFDF',
                borderTopWidth: 1,
                // paddingVertical: scale(5),
              }}
              onPress={() => addPlayertoSquad(item)}>
              <View style={{flexDirection: 'row', flex: 3}}>
                <View style={styles.flatListSection}>
                  <Flag
                    country={item.profile.nationalTeam}
                    width={scale(25)}
                    height={scale(25)}
                  />
                </View>
                <View
                  style={[
                    styles.flatListSection,
                    {alignItems: 'flex-start', flex: 3},
                  ]}>
                  <View>
                    <Text style={styles.smallText}>
                      {item.profile.firstName[0] + '.'} {item.profile.lastName}
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.smallText, {color: '#C3B3B3'}]}>
                      {item.profile.nationalTeam}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.flatListSection, {flex: 1.5}]}>
                <Text style={styles.mediumText}>
                  €{(item.profile.price / 1000000).toFixed(1)}m
                </Text>
              </View>
              <View style={styles.flatListSection}>
                <Text style={styles.mediumText}>{item.stats.points}</Text>
              </View>
              <View style={styles.flatListSection}>
                <Text style={styles.mediumText}>{item.stats.cleanSheets}</Text>
              </View>
              <View style={[styles.flatListSection, {flex: 1.5}]}>
                <Text style={styles.mediumText}>
                  {item.stats.goalsConceded}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default SelectPlayer;

const styles = ScaledSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
  },
  selectTeamContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#C4C4C4',
    borderBottomRightRadius: '10@ms',
    zIndex: 9,
  },
  sortByContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#C4C4C4',
    borderBottomLeftRadius: '10@ms',
  },
  flatListSection: {
    paddingVertical: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flatListHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  smallText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '11@s',
    textAlign: 'center',
  },
  mediumText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '13@s',
  },
});
