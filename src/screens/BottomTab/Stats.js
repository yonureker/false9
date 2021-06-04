import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text>Stats Screen</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

