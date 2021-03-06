const ddb = require('aws-sdk/clients/dynamodb');
const ddbClient = new ddb({ region: 'us-east-1' });
const tableName = 'trail-maps-coordinates';
exports.writeItem = function (item) {
  return new Promise((resolve, reject) => {
    ddbClient.putItem({
      Item: {
        emailId: { N: String(new Date().getTime()) },
        subject: { S: item.subject },
        text: { S: item.text },
        date: { S: String(item.date) },
        lat: { N: String(item.lat) },
        lng: { N: String(item.lng) }
      },
      TableName: tableName
    }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

exports.getAll = function () {
  return new Promise((resolve, reject) => {
    ddbClient.scan({ TableName: tableName }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
