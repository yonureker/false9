/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Share, StyleSheet, Text, View} from 'react-native';
import BudgetItem from '../components/Budget/BudgetItem';
import {useDispatch, useSelector} from 'react-redux';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {RewardedAd, TestIds} from '@react-native-firebase/admob';
import firestore from '@react-native-firebase/firestore';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-9776391059103042~6078670414';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

const Budget = () => {
  const uid = useSelector((state) => state.user.uid);
  const currentRound = useSelector((state) => state.round.current);
  const budget = useSelector((state) => state.budget);

  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const snapshot = firestore()
      .collection('users')
      .doc(uid)
      .collection('squads')
      .doc(currentRound)
      .onSnapshot((doc) => {
        const squad = doc.data();
        dispatch({type: 'UPDATE_ADS_BUDGET', payload: squad.budget.items.ads});
      });
    return () => snapshot();
  }, []);

  const items = [
    // {
    //   title: 'INVITE FRIENDS',
    //   description:
    //     'Invite your friends and earn €500,000 when they sign up! This bonus applies to every matchday.',
    //   buttonText: 'INVITE',
    //   type: 'referrals',
    //   iconName: 'invite',
    //   onPress: () => buildDynamicLink(),
    // },
    {
      title: 'DAILY LOGIN',
      description:
        'Simply login to the app and earn extra budget of €250,000 everyday!',
      type: 'dailyLogin',
      buttonText: 'CLAIM',
      iconName: 'login',
    },
    {
      title: 'WATCH ADS',
      description: 'Earn €250,000 each time you watch a video ad!',
      buttonText: 'WATCH',
      type: 'ads',
      iconName: 'ads',
      onPress: () => checkAdStatus(),
    },
    {
      title: 'PURCHASE BUDGET',
      description:
        'You can purchase additional budget for $0.99. This bonus is applicable only for one round. An additional budget of €5,000,000 will be added.',
      type: 'purchased',
      iconName: 'purchase',
      buttonText: '€0.99',
    },
    {
      title: 'PURCHASE BUDGET',
      description:
        'You can purchase additional budget for $0.99. This bonus is applicable only for one round. An additional budget of €5,000,000 will be added.',
      type: 'purchased',
      buttonText: '€0.99',
    },
    {
      title: 'PURCHASE BUDGET',
      description:
        'You can purchase additional budget for $0.99. This bonus is applicable only for one round. An additional budget of €5,000,000 will be added.',
      type: 'purchased',
      buttonText: '€0.99',
    },
  ];

  const checkAdStatus = () => {
    if (budget.ads >= 3000000) {
      Alert.alert('You hit the maximum');
    } else {
      rewarded.show();
    }
  };

  const buildDynamicLink = async () => {
    const referrerLink = await dynamicLinks().buildShortLink({
      domainUriPrefix: 'https://false9.page.link',
      link: `https://false9.page.link?invitedBy=${uid}`,
      ios: {
        bundleId: 'org.false9.app',
        appStoreId: '1480753570',
        fallbackUrl: 'www.google.com',
      },
      navigation: {
        forcedRedirectEnabled: true,
      },
    });

    Share.share({message: referrerLink});
  };


  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      const docRef = firestore().doc(`users/${uid}/squads/${currentRound}`);

      if (type === 'rewarded_loaded') {
        // setLoaded(true);
      }

      if (type === 'rewarded_earned_reward') {
        docRef.update({'budget.items.ads': budget.ads + 250000});
      }

      if (type === 'closed') {
        // setLoaded(false);
        setNumber(number + 1);
      }
    });

    // Start loading the rewarded ad straight away
    if (!rewarded.loaded) {
      rewarded.load();
    }

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, [number]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item, index) => (
        <BudgetItem
          key={index}
          title={item.title}
          content={item.description}
          buttonText={item.buttonText}
          onPress={item.onPress}
          type={item.type}
          budget={budget}
          icon={item.iconName}
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
