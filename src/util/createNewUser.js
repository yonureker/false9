import firestore from '@react-native-firebase/firestore';
import rounds from '../util/Rounds';

const createNewUser = async (user, id) => {
  try {
    const batch = firestore().batch();

    // add user to users collection
    const newUserRef = firestore().collection('users');
    batch.set(newUserRef.doc(user.uid), {
      uid: user.uid,
      createdOn: firestore.FieldValue.serverTimestamp(),
      leagues: [],
      points: {
        totalPoints: 0,
        'Group stage - Matchday 1': 0,
        'Group stage - Matchday 2': 0,
        'Group stage - Matchday 3': 0,
        'Round of 16': 0,
        'Quarter Final': 0,
        'Semi Final': 0,
        Final: 0,
      },
      teamName: null,
      referrerID: id,
      referralAmount: 0,
    });

    const userRef = firestore().collection('users').doc(user.uid);
    rounds.map((round) => {
      batch.set(userRef.collection('squads').doc(round), {
        players: Array(15).fill({}),
        value: 0,
        points: 0,
        formation: '4 - 4 - 2',
        budget: {
          items: {
            base: 75000000,
            ads: 0,
            dailyLogin: 0,
            purchased: 0,
            referrals: 0,
          },
          totalBudget: 75000000,
          lastDailyClaim: null,
        },
      });
    });

    await batch.commit();
    console.log('batch write success');
  } catch (error) {
    console.log(error);
  }
};

export default createNewUser;
