import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Flag from '../util/Flag';

const dummyData = [
  {
    firstName: 'Thibaut',
    lastName: 'Courtois',
    team: 'Belgium',
    position: 'Goalkeeper',
    price: 15000000,
    totalPoints: 45,
    cleanSheets: 2,
    goalsConceded: 5,
  },
  {
    firstName: 'Gianluigi',
    lastName: 'Donnaruma',
    team: 'Italy',
    position: 'Goalkeeper',
    price: 14000000,
    totalPoints: 35,
    cleanSheets: 7,
    goalsConceded: 5,
  },
  {
    firstName: 'Wojciech',
    lastName: 'Szczęsny',
    team: 'Poland',
    position: 'Goalkeeper',
    price: 13000000,
    totalPoints: 25,
    cleanSheets: 6,
    goalsConceded: 5,
  },
  {
    firstName: 'Bernd',
    lastName: 'Leno',
    team: 'Germany',
    position: 'Goalkeeper',
    price: 13000000,
    totalPoints: 22,
    cleanSheets: 8,
    goalsConceded: 5,
  },
  {
    firstName: 'David',
    lastName: 'De Gea',
    team: 'Spain',
    position: 'Goalkeeper',
    price: 12000000,
    totalPoints: 23,
    cleanSheets: 1,
    goalsConceded: 5,
  },
  {
    firstName: 'Jordan',
    lastName: 'Pickford',
    team: 'England',
    position: 'Goalkeeper',
    price: 10000000,
    totalPoints: 44,
    cleanSheets: 0,
    goalsConceded: 5,
  },
  {
    firstName: 'Manuel',
    lastName: 'Neuer',
    team: 'Germany',
    position: 'Goalkeeper',
    price: 9000000,
    totalPoints: 99,
    cleanSheets: 4,
    goalsConceded: 5,
  },
  {
    firstName: 'Uğurcan',
    lastName: 'Çakır',
    team: 'Turkey',
    position: 'Goalkeeper',
    price: 8000000,
    totalPoints: 27,
    cleanSheets: 2,
    goalsConceded: 5,
  },
  {
    firstName: 'Hugo',
    lastName: 'Lloris',
    team: 'France',
    position: 'Goalkeeper',
    price: 8000000,
    totalPoints: 44,
    cleanSheets: 1,
    goalsConceded: 5,
  },
  {
    firstName: 'Altay',
    lastName: 'Bayındır',
    team: 'Turkey',
    position: 'Goalkeeper',
    price: 7500000,
    totalPoints: 12,
    cleanSheets: 1,
    goalsConceded: 5,
  },
  {
    firstName: 'Rafa',
    lastName: 'Silva',
    team: 'Portugal',
    position: 'Goalkeeper',
    price: 6500000,
    totalPoints: 15,
    cleanSheets: 1,
    goalsConceded: 5,
  },
  {
    firstName: 'Kasper',
    lastName: 'Schmeichel',
    team: 'Denmark',
    position: 'Goalkeeper',
    price: 6000000,
    totalPoints: 99,
    cleanSheets: 1,
    goalsConceded: 5,
  },
  {
    firstName: 'Anatoliy',
    lastName: 'Trubin',
    team: 'Ukraine',
    position: 'Goalkeeper',
    price: 2000000,
    totalPoints: 14,
    cleanSheets: 3,
    goalsConceded: 9,
  },
  {
    firstName: 'Tim',
    lastName: 'Krul',
    team: 'Netherlands',
    position: 'Goalkeeper',
    price: 6000000,
    totalPoints: 82,
    cleanSheets: 2,
    goalsConceded: 3,
  },
  {
    firstName: 'Alexander',
    lastName: 'Schlager',
    team: 'Austria',
    position: 'Goalkeeper',
    price: 1500000,
    totalPoints: 14,
    cleanSheets: 4,
    goalsConceded: 2,
  },
  {
    firstName: 'Danny',
    lastName: 'Ward',
    team: 'Wales',
    position: 'Goalkeeper',
    price: 4200000,
    totalPoints: 44,
    cleanSheets: 1,
    goalsConceded: 1,
  },
  {
    firstName: 'Yann',
    lastName: 'Sommer',
    team: 'Switzerland',
    position: 'Goalkeeper',
    price: 3600000,
    totalPoints: 32,
    cleanSheets: 0,
    goalsConceded: 2,
  },
  {
    firstName: 'Jesse',
    lastName: 'Joronen',
    team: 'Finland',
    position: 'Goalkeeper',
    price: 2600000,
    totalPoints: 32,
    cleanSheets: 4,
    goalsConceded: 5,
  },
  {
    firstName: 'Tomáš',
    lastName: 'Vaclík',
    team: 'Czech Republic',
    position: 'Goalkeeper',
    price: 1800000,
    totalPoints: 22,
    cleanSheets: 1,
    goalsConceded: 5,
  },
];

const SelectPlayer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.lastName}
        style={{alignSelf: 'stretch'}}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <View style={[{flex: 3}, styles.center]}>
              <Text style={styles.smallText}>Player</Text>
            </View>
            <View style={[{flex: 1.5}, styles.center]}>
              <Text style={styles.smallText}>Price</Text>
            </View>
            <View style={[{flex: 1}, styles.center]}>
              <Text style={styles.smallText}>Total Points</Text>
            </View>
            <View style={[{flex: 1}, styles.center]}>
              <Text style={styles.smallText}>Clean Sheets</Text>
            </View>
            <View style={[{flex: 1.5}, styles.center]}>
              <Text style={styles.smallText}>Goals Conceded</Text>
            </View>
          </View>
        }
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              borderTopColor: '#E5DFDF',
              borderTopWidth: 1,
              // paddingVertical: scale(5),
            }}>
            <View style={{flexDirection: 'row', flex: 3}}>
              <View style={styles.flatListSection}>
                <Flag country={item.team} width={scale(25)} height={scale(25)}/>
              </View>
              <View
                style={[
                  styles.flatListSection,
                  {alignItems: 'flex-start', flex: 3},
                ]}>
                <View>
                  <Text style={styles.smallText}>
                    {item.firstName[0] + '.'} {item.lastName}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.smallText, {color: '#C3B3B3'}]}>
                    {item.team}
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.flatListSection, {flex: 1.5}]}>
              <Text style={styles.mediumText}>
                €{(item.price / 1000000).toFixed(1)}m
              </Text>
            </View>
            <View style={styles.flatListSection}>
              <Text style={styles.mediumText}>{item.totalPoints}</Text>
            </View>
            <View style={styles.flatListSection}>
              <Text style={styles.mediumText}>{item.cleanSheets}</Text>
            </View>
            <View style={[styles.flatListSection, {flex: 1.5}]}>
              <Text style={styles.mediumText}>{item.goalsConceded}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SelectPlayer;

const styles = ScaledSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
  },
  selectTeamContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#C4C4C4',
    borderBottomRightRadius: '10@ms',
    zIndex: 99,
  },
  sortByContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#C4C4C4',
    borderBottomLeftRadius: '10@ms',
  },
  flatListSection: {
    paddingVertical: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flatListHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  smallText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '11@s',
    textAlign: 'center',
  },
  mediumText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '13@s',
  },
});
