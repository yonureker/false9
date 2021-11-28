import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Countdown = () => {
  const [remainingDays, setRemainingDays] = useState(null);
  const [remainingHours, setRemainingHours] = useState(null);
  const [remainingMinutes, setRemainingMinutes] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);

  const calculateTimeDifference = () => {
    // get total seconds between the times
    let current = Math.floor(Date.now() / 1000);
    let then = 1623463200;
    let delta = then - current;

    // calculate (and subtract) whole days
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;
    setRemainingDays(days);

    // calculate (and subtract) whole hours
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    setRemainingHours(hours);

    // calculate (and subtract) whole minutes
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    setRemainingMinutes(minutes);

    // what's left is seconds
    let seconds = delta % 60; // in theory the modulus is not required
    setRemainingSeconds(seconds);
  };

  useEffect(() => {
    const intervalId = setInterval(calculateTimeDifference, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Text style={styles.remainingTimeText}>
        {remainingDays} days {remainingHours} hours {remainingMinutes} minutes{' '}
        {remainingSeconds} seconds
      </Text>
    </View>
  );
};

export default Countdown;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remainingTimeText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
    color: 'white',
  },
});
