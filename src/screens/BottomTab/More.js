import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

const More = () => {
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await auth().signOut();
      dispatch({type: 'RESET_USER_DATA'});
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
