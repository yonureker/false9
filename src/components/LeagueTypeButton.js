import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

const LeagueTypeButton = () => {
  return (
    <View style={styles.leagueTypeButton}>
      <View>
        <Fontisto name="locked" size={scale(15)} color="black" />
      </View>
      <View>
        <Text style={styles.buttonText}>Private League</Text>
      </View>
    </View>
  );
};

export default LeagueTypeButton;

const styles = ScaledSheet.create({
  leagueTypeButton: {
    backgroundColor: '#BFB9B9',
    flexDirection: 'row',
    padding: '5@s',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: '14@s',
    fontFamily: 'LexendDeca-Regular',
    paddingLeft: '5@s',
  },
});
