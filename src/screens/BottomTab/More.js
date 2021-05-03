import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const More = () => {
  const signOut = () => {
    try {
      auth()
        .signOut()
        .then(() => console.log('user signed out'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Pressable onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
