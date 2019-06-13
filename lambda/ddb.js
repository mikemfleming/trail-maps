const ddb = require('aws-sdk/clients/dynamodb');
const ddbClient = new ddb({ region: 'us-east-1' });

exports.writeItem = function (item) {
  return new Promise((resolve, reject) => {
    ddbClient.putItem({
      Item: {
        emailId: { N: String(new Date().getTime()) },
        subject: { S: item.subject },
        text: { S: item.text },
        date: { S: String(item.date) },
        lat: { S: item.lat },
        lng: { S: item.lng }
      },
      TableName: 'trail-maps'
    }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}
