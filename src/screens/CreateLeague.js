import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';'

const CreateLeague = () => {
  return <View style={styles.container}></View>
};

export default CreateLeague;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
