const functions = require('firebase-functions');
const admin = require('firebase-admin');
const FieldValue = admin.firestore.FieldValue;

const algoliasearch = require('algoliasearch').default;

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;

const ALGOLIA_INDEX_NAME = 'false9_leagues';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

admin.initializeApp();

exports.onLeagueUpdate = functions.firestore
  .document('leagues/{leagueId}')
  .onWrite((change, context) => {
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    const leagueId = context.params.leagueId;
    const league = change.after.data();

    // if league is deleted
    if (!league) {
      return index.deleteObject(leagueId, (error) => {
        if (error) throw error;
        console.log('League removed');
      });
    }

    // Add an 'objectID' field which Algolia requires
    league.objectID = leagueId;

    // if league is created or updated
    return index.saveObject(league, (error) => {
      if (error) throw error;
      console.log('League updated');
    });
  });

exports.checkLeaguePassword = functions.https.onCall(async (data, context) => {
  const leagueID = data.leagueID;
  const userPassword = data.userPassword;

  const leagueRef = await admin
    .firestore()
    .collection('leagues')
    .doc(leagueID)
    .get();

  const leaguePassword = await leagueRef.data().password;

  return userPassword === leaguePassword;
});

exports.setReferralAmount = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    const user = snap.data();
    const referrerID = user.referrerID;

    if (referrerID !== null) {
      const referrerUserRef = admin
        .firestore()
        .collection('users')
        .doc(user.referrerID);

      referrerUserRef.update({
        referralAmount: FieldValue.increment(1),
      });
    }
  });

exports.incrementLeagueTeamCount = functions.https.onCall((data, context) => {
  const leagueID = data.leagueID;
  const leagueRef = admin.firestore().collection('leagues').doc(leagueID);

  leagueRef.update({
    teamCount: FieldValue.increment(1),
  });
});

exports.decrementLeagueTeamCount = functions.https.onCall((data, context) => {
  const leagueID = data.leagueID;
  const leagueRef = admin.firestore().collection('leagues').doc(leagueID);

  leagueRef.update({
    teamCount: FieldValue.increment(-1),
  });
});
