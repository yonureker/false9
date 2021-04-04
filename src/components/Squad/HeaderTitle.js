import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>Group Stage - MatchDay 1</Text>
      <Text style={styles.smallText}>Available Budget: €75,000,000</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  normalText: {
    fontSize: '16@s',
    fontFamily: 'LexendDeca-Regular',
    color: 'white',
  },
  smallText: {
    fontSize: '12@s',
    fontFamily: 'LexendDeca-Regular',
    color: 'white',
  },
});
