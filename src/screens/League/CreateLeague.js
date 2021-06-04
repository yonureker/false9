import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import LeagueTypeButton from '../../components/LeagueTypeButton';

const CreateLeague = ({navigation}) => {
  const [publicLeague, setPublicLeague] = useState(true);
  const [privateLeague, setPrivateLeague] = useState(false);
  const [leagueName, setLeagueName] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const uid = useSelector((state) => state.user.uid);

  const toggleLeagueType = () => {
    setPublicLeague(!publicLeague);
    setPrivateLeague(!privateLeague);
    setPassword('');
    setConfirmPassword('');
  };

  const createLeague = async () => {
    try {
      const batch = firestore().batch();

      // add league to leagues collection
      const newLeagueRef = firestore().collection('leagues').doc();
      batch.set(newLeagueRef, {
        leagueName: leagueName,
        ownerID: uid,
        password: password,
        private: privateLeague,
        teamCount: 1,
      });

      // update user's leagues' array.
      const userRef = firestore().collection('users').doc(uid);
      batch.update(userRef, {
        leagues: firestore.FieldValue.arrayUnion(newLeagueRef.id),
      });

      // commit batch
      await batch.commit();

      navigation.navigate('Leagues Home');
    } catch (error) {
      console.log('transaction failure', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start', minHeight: 400}}>
        <View style={styles.switchContainer}>
          <LeagueTypeButton
            type="Public League"
            iconName="account-group"
            active={publicLeague}
            toggleLeagueType={toggleLeagueType}
          />
          <LeagueTypeButton
            type="Private League"
            iconName="lock"
            active={privateLeague}
            toggleLeagueType={toggleLeagueType}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formItem}>
            <MaterialCommunityIcons
              name="pencil-box"
              size={scale(25)}
              color="black"
              style={styles.itemIcon}
            />
            <TextInput
              placeholder="League Name"
              style={styles.itemText}
              onChangeText={(text) => setLeagueName(text)}
            />
          </View>
          {privateLeague && (
            <View>
              <View style={styles.formItem}>
                <MaterialCommunityIcons
                  name="form-textbox-password"
                  size={scale(25)}
                  color="black"
                  style={styles.itemIcon}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.itemText}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View style={styles.formItem}>
                <MaterialCommunityIcons
                  name="form-textbox-password"
                  size={scale(25)}
                  color="black"
                  style={styles.itemIcon}
                />
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.itemText}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
              </View>
            </View>
          )}
        </View>
        <View>
          <Pressable style={styles.button} onPress={() => createLeague()}>
            <Text style={styles.buttonText}>Create League</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CreateLeague;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '300@s',
    marginTop: '10@s',
  },
  button: {
    backgroundColor: '#1098AE',
    borderRadius: '5@s',
    marginTop: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: '16@s',
    fontFamily: 'LexendDeca-Regular',
    padding: '10@s',
    color: 'white',
  },
  formContainer: {
    marginTop: '10@s',
  },
  formItem: {
    backgroundColor: 'white',
    width: '300@s',
    flexDirection: 'row',
    paddingHorizontal: '10@s',
    paddingVertical: '15@s',
    marginTop: '10@s',
    borderRadius: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: '14@s',
    fontFamily: 'LexendDeca-Regular',
    flex: 1,
  },
  itemIcon: {
    paddingHorizontal: '10@s',
  },
});
