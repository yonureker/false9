import firestore, { firebase } from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, Text, View } from 'react-native';
import Dialog from 'react-native-dialog';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useSelector } from 'react-redux';

const HeaderRightIcon = () => {
  const uid = useSelector((state) => state.session.uid);
  const leagueID = useSelector((state) => state.selection.leagueID);
  const privateLeague = useSelector((state) => state.selection.privateLeague);
  const userLeagues = useSelector((state) => state.user.leagues);
  const isUserLeague = userLeagues.includes(leagueID);
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [passwordErrorVisible, setPassWordErrorVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(false);

  const leaveLeague = async (id) => {
    const docRef = firestore().collection('users').doc(uid);

    try {
      await docRef.update({
        leagues: firebase.firestore.FieldValue.arrayRemove(id),
      });

      navigation.navigate('Leagues Home');

      let decrement = functions().httpsCallable('decrementLeagueTeamCount');

      await decrement({leagueID: id});
    } catch (error) {
      console.log(error);
    }
  };

  const joinLeague = async (id) => {
    const docRef = firestore().collection('users').doc(uid);

    try {
      await docRef.update({
        leagues: firebase.firestore.FieldValue.arrayUnion(id),
      });

      navigation.navigate('Leagues Home');

      let increment = functions().httpsCallable('incrementLeagueTeamCount');

      await increment({leagueID: id});
    } catch (error) {
      console.log(error);
    }
  };

  const verifyLeaguePassword = async () => {
    try {
      setInitializing(true);
      let checkLeaguePassword = functions().httpsCallable(
        'checkLeaguePassword',
      );

      let response = await checkLeaguePassword({
        leagueID: leagueID,
        userPassword: password,
      });

      if (response.data) {
        joinLeague(leagueID);
      }

      if (response.data === false) {
        setPassWordErrorVisible(true);
      }
      setInitializing(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isUserLeague) {
    return (
      <View style={styles.rightContainer}>
        <Pressable
          style={styles.iconContainer}
          onPress={() =>
            Alert.alert('Are you sure?', 'Do you want to leave this league?', [
              {
                text: 'Leave',
                onPress: () => leaveLeague(leagueID),
              },
              {text: 'Cancel'},
            ])
          }>
          <Ionicons name="exit" size={scale(20)} color="white" />
          <Text style={styles.text}>Leave</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.rightContainer}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          if (!privateLeague) {
            Alert.alert('Are you sure?', 'Do you want to join this league?', [
              {
                text: 'Join',
                onPress: () => joinLeague(leagueID),
              },
              {text: 'Cancel'},
            ]);
          } else {
            setVisible(true);
          }
        }}>
        <Ionicons name="enter" size={scale(20)} color="white" />
        <Text style={styles.text}>Join</Text>
      </Pressable>
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>League Password</Dialog.Title>
          <Dialog.Description>
            Enter the league password to join.
          </Dialog.Description>
          <Dialog.Input
            onChangeText={(text) => setPassword(text)}
            keyboardType="number-pad"
            maxLength={6}
          />
          <Dialog.Button
            label="Cancel"
            onPress={() => {
              setVisible(false);
              setPassWordErrorVisible(false);
            }}
          />
          <Dialog.Button
            label="Confirm"
            onPress={() => verifyLeaguePassword()}
          />
          {initializing && (
            <ActivityIndicator style={styles.activityIndicator} />
          )}
          {passwordErrorVisible && (
            <Text style={styles.errorText}>Incorrect Password. Try Again.</Text>
          )}
        </Dialog.Container>
      </View>
    </View>
  );
};

export default HeaderRightIcon;

const styles = ScaledSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    paddingRight: '10@s',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '10@s',
    color: 'white',
  },
  activityIndicator: {
    marginBottom: '10@s',
  },
  errorText: {color: 'red', textAlign: 'center', marginBottom: '10@s'},
});
