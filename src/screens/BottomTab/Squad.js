import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Auth} from 'aws-amplify';



const Squad = () => {
  return (
    <View style={styles.container}>
      <Text>Squad Screen</Text>
      <Pressable
        onPress={() =>
          Auth.signOut()
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Squad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
