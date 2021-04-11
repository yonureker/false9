import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const LeagueTypeButton = (props) => {
  const {type, iconName, active, toggleLeagueType} = props;

  const backgroundColor = active ? styles.active : styles.disabled;

  return (
    <Pressable
      style={[styles.leagueTypeButton, backgroundColor]}
      onPress={() => toggleLeagueType()}>
      <View style={styles.centeredView}>
        <MaterialCommunityIcons
          name={iconName}
          size={scale(15)}
          color="black"
        />
      </View>
      <View style={styles.centeredView}>
        <Text style={styles.buttonText}>{type}</Text>
      </View>
    </Pressable>
  );
};

export default LeagueTypeButton;

const styles = ScaledSheet.create({
  leagueTypeButton: {
    flexDirection: 'row',
    padding: '5@s',
    borderRadius: 10,
    margin: '5@s',
  },
  active: {
    backgroundColor: '#BFB9B9',
  },
  disabled: {
    backgroundColor: '#ECE5E5',
  },
  buttonText: {
    fontSize: '15@s',
    fontFamily: 'LexendDeca-Regular',
    paddingLeft: '5@s',
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
