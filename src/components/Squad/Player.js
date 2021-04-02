import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/NationalTeams/turkey.svg';

const Player = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('Select Player');
      }}>
      <View style={styles.roundIcon}>
        {/* <Logo width="100%" height="100%" /> */}
      </View>
      <View style={styles.playerNameContainer}>
        <Text style={styles.playerNameText}></Text>
      </View>
    </Pressable>
  );
};

export default Player;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundIcon: {
    width: '40@s',
    height: '40@s',
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
});
