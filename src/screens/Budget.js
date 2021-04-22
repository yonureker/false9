import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BudgetItem from '../components/Budget/BudgetItem';

const items = [
  {
    title: 'INVITE FRIENDS',
    description:
      'Invite your friends and earn €500,000 when they sign up! This bonus applies to every matchday.',
    buttonText: 'INVITE',
  },
  {
    title: 'DAILY LOGIN',
    description:
      'Simply login to the app and earn extra budget of €250,000 everyday!',
    buttonText: 'CLAIM',
  },
  {
    title: 'WATCH ADS',
    description:
      'Earn €250,000 each time you watch a video ad!',
    buttonText: 'CLAIM',
  },
  {
    title: 'PURCHASE BUDGET',
    description:
      'You can purchase additional budget for $0.99. This bonus is applicable only for one round. An additional budget of €5,000,000 will be added.',
    buttonText: '€0.99',
  },
  {
    title: 'PURCHASE BUDGET',
    description:
      'You can purchase additional budget for $0.99. This bonus is applicable only for one round. An additional budget of €5,000,000 will be added.',
    buttonText: '€0.99',
  },
  {
    title: 'PURCHASE BUDGET',
    description:
      'You can purchase additional budget for $0.99. This bonus is applicable only for one round. An additional budget of €5,000,000 will be added.',
    buttonText: '€0.99',
  },
];

const Budget = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item, index) => (
        <BudgetItem
          key={index}
          title={item.title}
          content={item.description}
          buttonText={item.buttonText}
        />
      ))}
    </ScrollView>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ececec',
  },
});
