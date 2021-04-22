import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const LeagueTypeButton = (props) => {
  const {type, iconName, active, toggleLeagueType} = props;

  const backgroundColor = active ? styles.active : styles.disabled;
  const buttonText = active
    ? styles.activeButtonText
    : styles.disabledButtonText;

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
        <Text style={buttonText}>{type}</Text>
      </View>
    </Pressable>
  );
};

export default LeagueTypeButton;

const styles = ScaledSheet.create({
  leagueTypeButton: {
    flexDirection: 'row',
    padding: '10@s',
    borderRadius: 10,
  },
  active: {
    backgroundColor: '#1098AE',
  },
  disabled: {
    backgroundColor: '#ECE5E5',
  },
  activeButtonText: {
    fontSize: '15@s',
    fontFamily: 'LexendDeca-Regular',
    paddingLeft: '5@s',
    color: 'white'
  },
  disabledButtonText: {
    fontSize: '15@s',
    fontFamily: 'LexendDeca-Regular',
    paddingLeft: '5@s',
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
