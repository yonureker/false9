import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const More = () => {
  return (
    <View>
      <Pressable
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
