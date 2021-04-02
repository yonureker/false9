import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const BudgetItem = (props) => {
  const {title, content, buttonText} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#DDDDDD',
        // maxWidth: scale(350),
        minHeight: 100,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white'
      }}>
      <View
        style={[
          styles.container,
          {borderRightWidth: 3, borderRightColor: '#DDDDDD'},
        ]}>
        <AntDesign size={45} name="adduser" />
      </View>
      <View style={{flex: 5}}>
        <View
          style={{
            padding: 5,
            borderBottomWidth: 3,
            borderBottomColor: '#DDDDDD',
          }}>
          <Text style={styles.itemText}>{title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 6, padding: 5}}>
            <Text style={styles.smallItemText}>{content}</Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={{
                backgroundColor: '#EE6565',
                minWidth: 60,
                padding: 2,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontFamily: 'LexendDeca-Regular',
                  fontSize: scale(12)
                }}>
                {buttonText}
              </Text>
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
  itemText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: scale(12),
  },
  smallItemText: {
    fontFamily: 'LexendDeca-Regular',
    color: 'gray',
    fontSize: scale(10),
  },
});
