import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-9776391059103042~6078670414';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

const RewardAd = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
      }
    });

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return <View></View>;
};

export default RewardAd;

const styles = StyleSheet.create({});
