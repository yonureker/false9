import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const BudgetItem = (props) => {
  const {title, content, buttonText, onPress, type, budget, icon} = props;

  // const image = icon === 'invite' ? inviteIcon : null

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.container, styles.itemIconContainer]}>
        <MaterialCommunityIcons size={45} name={icon} color="black" />
      </View>
      <View style={{flex: 5}}>
        <View style={styles.itemHeaderContainer}>
          <View>
            <Text style={styles.itemTitle}>{title}</Text>
          </View>
          {budget[type] !== 0 && (
            <View>
              <Text style={styles.itemBudget}>+ ${budget[type]} added!</Text>
            </View>
          )}
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 6, padding: 5}}>
            <Text style={styles.itemDescription}>{content}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BudgetItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemHeaderContainer: {
    padding: 5,
    borderBottomWidth: 3,
    borderBottomColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: scale(12),
  },
  itemBudget: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: scale(12),
    color: 'green',
  },
  itemDescription: {
    fontFamily: 'LexendDeca-Regular',
    // color: 'gray',
    fontSize: scale(10),
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#DDDDDD',
    minHeight: 100,
    maxHeight: 110,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  itemIconContainer: {borderRightWidth: 3, borderRightColor: '#DDDDDD'},
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#EE6565',
    minWidth: 60,
    padding: 2,
    borderRadius: 5,
    paddingBottom: 6
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'LexendDeca-Regular',
    fontSize: scale(12),
  },
  icon: {
    width: '80%',
    height: '80%',
  },
});
