import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FixturesModal = (props) => {
  const [fixtures, setFixtures] = useState(null);

  const fetchFixtures = async () => {
    try {
      const fixturesData = await firestore()
        .collection('fixtures')
        .doc('Group stage - Matchday 1')
        .get();

      setFixtures(fixturesData.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFixtures();
  }, []);

  if (fixtures === null) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <FlatList
            data={fixtures.matches}
            renderItem={({item}) => (
              <View>
                <Text>
                  {item.homeTeam} - {item.awayTeam}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FixturesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 300,
  },
});
