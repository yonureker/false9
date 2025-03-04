import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import HeaderTitle from '../components/Squad/HeaderTitle';
import Budget from '../screens/Budget';


const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {backgroundColor: '#0C98AF'},
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'LexendDeca-Regular', fontSize: scale(15)},
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
};

const BudgetStack = ({navigation}) => {
  const currentRound = useSelector((state) => state.round.current);
  const budgetItems = useSelector((state) => state.squad.budget.items);

  // const {totalBudget} = budget;

  const totalBudget = Object.values(budgetItems).reduce((a, b) => a + b, 0);

  return (
    <Stack.Navigator initialRouteName="Budget" screenOptions={headerStyle}>
      <Stack.Screen
        name="Budget"
        component={Budget}
        options={{
          headerTitle: (props) => (
            <HeaderTitle
              {...props}
              title={currentRound}
              subTitle={totalBudget}
              type="budget"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default BudgetStack;
