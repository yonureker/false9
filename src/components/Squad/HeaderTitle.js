import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const HeaderTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>Group Stage - MatchDay 1</Text>
      <Text style={styles.smallText}>
        {' '}
        {'€' + (props.availableBudget / 1000000).toFixed(1) + 'M'} available
      </Text>
    </View>
  );
};

export default HeaderTitle;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  normalText: {
    fontSize: '16@s',
    fontFamily: 'LexendDeca-Regular',
    color: 'white',
  },
  smallText: {
    fontSize: '12@s',
    fontFamily: 'LexendDeca-Regular',
    color: 'white',
  },
});
