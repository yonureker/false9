import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const LeagueDetails = ({navigation, route}) => {
  const {leagueID} = route.params;
  const [leagueUsers, setLeagueUsers] = useState([]);
  //
  const fetchLeagueMembers = async () => {
    const usersSnaphot = await firestore()
      .collection('users')
      .where('leagues', 'array-contains', leagueID)
      .limit(10)
      .get();

    const users = usersSnaphot.docs.map((doc) => doc.data());

    setLeagueUsers(users);
  };

  useEffect(() => {
    fetchLeagueMembers();
  }, []);
  //
  return (
    <View>
      {leagueUsers.map((user, index) => (
        <Text key={index}>{user.teamName}</Text>
      ))}
    </View>
  );
};

export default LeagueDetails;

const styles = StyleSheet.create({});
