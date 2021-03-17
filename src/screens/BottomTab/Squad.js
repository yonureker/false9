import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';



const Squad = () => {
  return (
    <View style={styles.container}>
      <Text>Squad Screen</Text>
    </View>
  );
};

export default Squad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
