import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Squad from '../screens/BottomTab/Squad';
import Fixtures from '../screens/Fixtures';
import SelectPlayer from '../screens/SelectPlayer';
import BudgetStack from '../navigation/BudgetStack';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {ScaledSheet, scale} from 'react-native-size-matters';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: scale(15)},
  headerTitleAlign: 'center',
};

const SquadStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Squad" screenOptions={headerStyle}>
      <Stack.Screen
        name="Group Stage - Matchday 1"
        component={Squad}
        options={{
          headerLeft: () => (
            <View style={styles.iconContainer}>
              <Pressable
                style={styles.iconContainer}
                onPress={() => navigation.navigate('Fixtures')}>
                <AntDesign name="calendar" size={25} color="white" />
                <Text style={styles.text}>Fixtures</Text>
              </Pressable>
            </View>
          ),
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRight: () => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name="save" size={25} color="white" />
              <Text style={styles.text}>Save</Text>
            </View>
          ),
          headerRightContainerStyle: {paddingRight: 10},
        }}
      />
      <Stack.Screen name="Fixtures" component={Fixtures} />
      <Stack.Screen name="Select Player" component={SelectPlayer} />
      <Stack.Screen
        name="Budget"
        component={BudgetStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SquadStack;

const styles = ScaledSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    paddingLeft: '20@s',
  },
  rightContainer: {
    paddingRight: '20@s',
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '10@s',
    color: 'white',
  },
});
