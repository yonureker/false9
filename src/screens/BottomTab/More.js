import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const More = () => {
  const signOut = async () => {
    try {
      await auth().signOut();

      console.log('signed out');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={signOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
