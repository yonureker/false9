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

// [END init_algolia]

// [START update_index_function]
// Update the search index every time a blog post is written.
exports.onLeagueCreated = functions.firestore
    .document("leagues/{leagueId}")
    .onCreate((snap, context) => {
    // Get the note document
      const league = snap.data();

      // Add an 'objectID' field which Algolia requires
      league.objectID = context.params.leagueId;

      // Write to the algolia index
      const index = client.initIndex(ALGOLIA_INDEX_NAME);
      return index.saveObject(league);
    });
// [END update_index_function]
