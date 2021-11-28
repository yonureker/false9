import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Flag from '../util/Flag';

const countries = [
  'Austria',
  'Belgium',
  'Croatia',
  'Czech Republic',
  'Denmark',
  'England',
  'Finland',
  'France',
  'Germany',
  'Hungary',
  'Italy',
  'Netherlands',
  'North Macedonia',
  'Poland',
  'Portugal',
  'Russia',
  'Scotland',
  'Slovakia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Turkey',
  'Ukraine',
  'Wales',
];

const SelectTeam = () => {
  return (
    <View style={styles.container}>
      {countries.map((flag, index) => (
        <View
          key={index}
          style={{
            width: '25%',
            height: '16.66%',
            justifyContent: 'center',
            alignItems: 'center',
            // paddingVertical: scale(15),
          }}>
          <Flag country={flag} width={scale(35)} height={scale(35)} />
          <Text style={styles.countryName}>{flag}</Text>
        </View>
      ))}
    </View>
  );
};

export default SelectTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  countryName: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: scale(10),
  },
});
