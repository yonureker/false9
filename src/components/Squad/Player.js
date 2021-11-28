import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Flag from '../../util/Flag';
import {useDispatch, useSelector} from 'react-redux';
import checkEmptyObject from '../../util/checkEmptyObject';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Player = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {position, index} = props;

  const playerProfile = useSelector((state) => state.squad.players[index]);
  const captainIndex = useSelector((state) => state.squad.captainIndex);

  // if player icon is not empty
  const playerSelected = JSON.stringify(playerProfile) !== '{}';

  const IconStyle = playerSelected ? styles.transparentIcon : styles.roundIcon;

  // if player is already selected send to player detail screen
  // if empty, send to select player screen
  const setRoute = () => {
    dispatch({type: 'UPDATE_PLAYER_INDEX', payload: index});

    if (checkEmptyObject(playerProfile)) {
      navigation.navigate('Select Player', {position: position});
    } else {
      navigation.navigate('Player Details', {
        playerProfile: playerProfile,
        position: position,
      });
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => setRoute()}>
      <View style={IconStyle}>
        {playerSelected ? (
          <Flag
            country={playerProfile.nationalTeam}
            width={scale(35)}
            height={scale(35)}
          />
        ) : null}
        {captainIndex === index && (
          <View style={styles.captainIconContainer}>
            <MaterialCommunityIcons
              name="alpha-c-circle"
              size={scale(15)}
              color="red"
            />
          </View>
        )}
      </View>
      <View style={styles.playerNameContainer}>
        <Text style={styles.playerNameText}>
          {playerSelected ? playerProfile.lastName.toUpperCase() : null}
        </Text>
      </View>
      <View style={styles.container}>
        {playerSelected && (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              {'€' + (playerProfile.price / 1000000).toFixed(1) + 'M'}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Player;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // top: '20@s'
  },
  roundIcon: {
    width: '35@s',
    height: '35@s',
    borderRadius: 50,
    backgroundColor: 'white',
    top: '5@vs',
    zIndex: 3,
  },
  transparentRoundIcon: {
    width: '35@s',
    height: '35@s',
    borderRadius: 50,
    backgroundColor: null,
    top: '5@vs',
    zIndex: 3,
  },
  playerNameContainer: {
    borderRadius: 6,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    minWidth: '70@ms',
    zIndex: 2,
  },
  playerNameText: {
    textAlign: 'center',
    color: 'white',
    paddingVertical: '3@vs',
    paddingHorizontal: '2@ms',
    fontSize: '10@ms',
    fontFamily: 'LexendDeca-Regular',
  },
  priceContainer: {
    minWidth: '30@ms',
    backgroundColor: '#DDDDDD',
    borderRadius: 3,
    position: 'absolute',
    top: 0,
  },
  priceText: {
    textAlign: 'center',
    color: 'black',
    paddingVertical: '1@vs',
    paddingHorizontal: '3@ms',
    fontSize: '9@ms',
    fontFamily: 'LexendDeca-Regular',
  },
  captainIconContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
