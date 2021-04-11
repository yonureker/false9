import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Flag from '../../util/Flag';
import {useDispatch, useSelector} from 'react-redux';

const Player = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {position, index} = props;

  const playerProfile = useSelector(
    (state) => state.squad.players[index],
  );

  const navigateToSelection = () => {
    dispatch({type: 'UPDATE_PLAYER_INDEX', payload: index});

    navigation.navigate('Select Player', {position: position});
  };

  return (
    <Pressable style={styles.container} onPress={() => navigateToSelection()}>
      <View style={styles.roundIcon}>
        {JSON.stringify(playerProfile) !== '{}' ? (
          <Flag
            country={playerProfile.nationalTeam}
            width="100%"
            height="100%"
          />
        ) : null}
      </View>
      <View style={styles.playerNameContainer}>
        <Text style={styles.playerNameText}>
          {JSON.stringify(playerProfile) !== '{}'
            ? playerProfile.lastName.toUpperCase()
            : null}
        </Text>
      </View>
      {JSON.stringify(playerProfile) !== '{}' && (
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {'€' + (playerProfile.price / 1000000).toFixed(1) + 'M'}
          </Text>
        </View>
      )}
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
    backgroundColor: '#DDDDDD',
    top: '5@vs',
    zIndex: 98,
  },
  playerNameContainer: {
    borderRadius: 6,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    minWidth: '70@ms',
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
  },
  priceText: {
    textAlign: 'center',
    color: 'black',
    paddingVertical: '1@vs',
    paddingHorizontal: '3@ms',
    fontSize: '9@ms',
    fontFamily: 'LexendDeca-Regular',
  },
});
