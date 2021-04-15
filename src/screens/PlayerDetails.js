import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Flag from '../util/Flag';

const PlayerDetails = ({route, navigation}) => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state) => state.selectedPlayer.index);

  const {
    firstName,
    lastName,
    nationalTeam,
    price,
    id,
  } = route.params.playerProfile;

  const {position} = route.params;

  const removePlayer = () => {
    dispatch({
      type: 'ADD_PLAYER',
      id: selectedIndex,
      payload: {},
    });

    dispatch({
      type: 'UPDATE_SQUAD_VALUE',
      payload: -price,
    });
    navigation.navigate('Group Stage - Matchday 1');
  };

  const replacePlayer = () => {
    navigation.navigate('Select Player', {
      position: position,
      replacedPlayerPrice: price,
    });
  };

  const makeCaptain = () => {
    if (selectedIndex < 10) {
      dispatch({type: 'UPDATE_CAPTAIN_INDEX', payload: selectedIndex});

      navigation.navigate('Group Stage - Matchday 1');
    } else {
      Alert.alert("You can't select a captain from bench.");
    }
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.playerDetailsItem}>
        <Flag country={nationalTeam} width={scale(50)} height={scale(50)} />
      </View>
      <Text style={styles.playerName}>
        {firstName} {lastName}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.playerDetailsItem}>
          <Text style={styles.playerDetails}>{nationalTeam}</Text>
        </View>
        <View style={styles.playerDetailsItem}>
          <Text style={styles.playerDetails}>{position}</Text>
        </View>
        <View style={styles.playerDetailsItem}>
          <Text style={styles.playerDetails}>
            €{(price / 1000000).toFixed(1)}M
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: scale(300),
          justifyContent: 'space-between',
        }}>
        <View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => makeCaptain()}>
            <View>
              <MaterialCommunityIcons
                name="alpha-c-circle"
                size={scale(20)}
                color="orange"
              />
            </View>
            <View>
              <Text style={styles.buttonText}>Make Captain</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => replacePlayer()}>
            <View>
              <MaterialCommunityIcons
                name="compare-horizontal"
                size={scale(20)}
                color="green"
              />
            </View>
            <View>
              <Text style={styles.buttonText}>Replace</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => removePlayer()}>
            <View>
              <FontAwesome name="remove" size={scale(20)} color="red" />
            </View>
            <View>
              <Text style={styles.buttonText}>Remove</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PlayerDetails;

const styles = ScaledSheet.create({
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  playerName: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '16@s',
  },
  playerDetails: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '14@s',
    color: 'gray',
  },
  buttonText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
    paddingLeft: '5@s',
  },
  playerDetailsItem: {
    padding: '10@s',
  },
  buttonContainer: {
    backgroundColor: '#F1E9E9',
    padding: '5@s',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    padding: '5@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
