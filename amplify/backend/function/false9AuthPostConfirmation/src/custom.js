var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: {S: event.request.userAttributes.sub},
        __typename: {S: 'Team'},
        phoneNumber: {S: event.request.userAttributes.phone_number},
        name: {S: event.userName},
        createdAt: {S: date.toISOString()},
        updatedAt: {S: date.toISOString()},
        totalPoints: {N: '0'},
      },
      TableName: process.env.TEAMTABLE,
    };

    try {
      await ddb.putItem(params).promise();
      console.log('Successful');
    } catch (err) {
      console.log('Error', err);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};
