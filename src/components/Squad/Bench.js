import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Player from './Player';

const Bench = () => {
  return (
    <View style={styles.benchContainer}>
      <View style={styles.benchHeaderContainer}>
        <Text style={styles.benchHeaderText}>Bench Players</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignSelf: 'stretch',
          justifyContent: 'space-evenly',
          paddingTop: 15,
        }}>
        <Player />
        <Player />
        <Player />
        <Player />
      </View>
    </View>
  );
};

export default Bench;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  benchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '110@ms',
    backgroundColor: '#ECECEC',
    borderTopLeftRadius: '10@ms',
    borderTopRightRadius: '10@ms',
    alignSelf: 'stretch',
    maxHeight: '150@vs',
  },
  benchHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c16565',
    width: '150@ms',
    borderBottomLeftRadius: '10@ms',
    borderBottomRightRadius: '10@ms',
    position: 'absolute',
    top: 0,
  },
  benchHeaderText: {
    padding: '2@ms',
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@ms'
  },
});
