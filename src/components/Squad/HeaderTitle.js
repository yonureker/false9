import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const HeaderTitle = (props) => {
  const {title, subTitle, type} = props;

  const setText = () => {
    if (type === 'squad') {
      return '€' + (subTitle / 1000000).toFixed(2) + 'M available';
    } else {
      return 'Total Budget: ' + '€' + (subTitle / 1000000).toFixed(2) + 'M';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>{title}</Text>
      <Text style={styles.smallText}>{setText()}</Text>
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
