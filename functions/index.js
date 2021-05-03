const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch").default;

// [START init_algolia]
// Initialize Algolia, requires installing Algolia dependencies:
// https://www.algolia.com/doc/api-client/javascript/getting-started/#install
//
// App ID and API Key are stored in functions config variables
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
// const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;

const ALGOLIA_INDEX_NAME = "false9_leagues";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onLeagueUpdate = functions.firestore
    .document("leagues/{leagueId}")
    .onWrite((change, context) => {
      const index = client.initIndex(ALGOLIA_INDEX_NAME);
      const leagueId = context.params.leagueId;
      const league = change.after.data();

      if (!league) {
        return index.deleteObject(leagueId, (error) => {
          if (error) throw error;
          console.log("League removed");
        });
      }

      // Add an 'objectID' field which Algolia requires
      league.objectID = leagueId;

      return index.saveObject(league, (error) => {
        if (error) throw error;
        console.log("League updated");
      });
    });
