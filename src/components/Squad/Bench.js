import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Player from './Player';

const Bench = (props) => {
  return (
    <View style={styles.benchContainer}>
      <View style={styles.benchHeaderContainer}>
        <Text style={styles.benchHeaderText}>Bench Players</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.container}>
          <Text>GK</Text>
          <Player index={11} position="Goalkeeper" />
        </View>
        <View style={styles.container}>
          <Text>DF</Text>
          <Player index={12} position="Defender" />
        </View>
        <View style={styles.container}>
          <Text>MID</Text>
          <Player index={13} position="Midfielder" />
        </View>
        <View style={styles.container}>
          <Text>FW</Text>
          <Player index={14} position="Forward" />
        </View>
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
    height: '120@ms',
    backgroundColor: '#ECECEC',
    borderTopLeftRadius: '10@ms',
    borderTopRightRadius: '10@ms',
    alignSelf: 'stretch',
    maxHeight: '175@vs',
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
    fontSize: '12@ms',
  },
});
