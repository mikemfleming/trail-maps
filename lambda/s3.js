const s3 = require('aws-sdk/clients/s3');
const s3Client = new s3();

exports.getFileKeys = function () {
  return new Promise((resolve, reject) => {
    s3Client.listObjects({ Bucket: 'trail-maps-ses-bucket' }, (err ,data) => {
      if (err) reject(err);
      resolve(data);
    });
  }).then(({ Contents }) => Contents.map(o => o.Key));
};

exports.getFileFromKey = function (key) {
  return new Promise((resolve, reject) => {
    s3Client.getObject({
      Bucket: 'trail-maps-ses-bucket',
      Key: key
    }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  }).then(f => f.Body.toString());
};
