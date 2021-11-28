import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const More = () => {
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.textInputContainer, styles.facebookColor]}
        onPress={() => signOut()}>
        <Icon name="door-open" size={30} color="white" style={styles.icon} />
        <Text style={styles.textInput}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default More;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInputContainer: {
    height: '40@ms',
    width: '300@ms',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
  },
  textInput: {
    fontSize: '16@ms',
    textAlign: 'left',
    fontFamily: 'LexendDeca-Regular',
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    minWidth: '180@ms',
    color: 'white',
  },
  icon: {
    paddingLeft: '10@ms',
    paddingRight: '10@ms',
  },
});
