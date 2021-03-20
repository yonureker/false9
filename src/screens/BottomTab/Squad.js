import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import FixturesModal from '../../components/FixturesModal';
import {ScaledSheet} from 'react-native-size-matters';

const backgroundImage = require('../../../assets/soccer_field.png');

const Squad = () => {
  const [fixturesModalVisible, setFixturesModalVisible] = useState(false);

  const tacticsOptions = [
    '4-4-2',
    '4-5-1',
    '4-3-3',
    '3-5-2',
    '3-4-3',
    '5-4-1',
    '5-3-2',
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.tacticsContainer}>
          <Text style={styles.tacticsText}>Tactics</Text>
        </View>
        <Pressable
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log('User signed out!'))
          }>
          <Text>Sign Out</Text>
        </Pressable>
        <Pressable onPress={() => setFixturesModalVisible(true)}>
          <Text>Fixtures</Text>
        </Pressable>
        <View style={styles.benchContainer}></View>
        {fixturesModalVisible && (
          <FixturesModal modalVisible={fixturesModalVisible} />
        )}
      </View>
    </ImageBackground>
  );
};

export default Squad;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tacticsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    width: '200@ms',
    borderBottomLeftRadius: '10@ms',
    borderBottomRightRadius: '10@ms',
  },
  tacticsText: {
    padding: '5@ms',
  },
  benchContainer: {
    height: '100@ms',
    width: '100%',
    backgroundColor: '#ECECEC',
    borderTopLeftRadius: '10@ms',
    borderTopRightRadius: '10@ms',
    position: 'absolute',
    bottom: 0,
  },
});
