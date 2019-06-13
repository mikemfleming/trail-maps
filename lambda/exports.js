const s3 = require('aws-sdk/clients/s3');
const parse = require('parse-email');

const s3Client = new s3();

function getFileKeys () {
  return new Promise((resolve, reject) => {
    s3Client.listObjects({ Bucket: 'trail-maps-ses-bucket' }, (err ,data) => {
      if (err) reject(err);
      resolve(data);
    });
  }).then(({ Contents }) => Contents.map(o => o.Key));
}

function getFileFromS3 (key) {
  return new Promise((resolve, reject) => {
    s3Client.getObject({
      Bucket: 'trail-maps-ses-bucket',
      Key: key
    }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  }).then(f => f.Body.toString());
}

// [ 'attachments',
//   'headers',
//   'html',
//   'text',
//   'textAsHtml',
//   'subject',
//   'references',
//   'date',
//   'to',
//   'from',
//   'messageId',
//   'inReplyTo' ]
function parseFile (file) {
  return parse(file)
    .then(({ subject, text, date, messageId }) => ({ subject, text, date, messageId }));
}

exports.handleEmail = async (event, context) => {
  console.log('~~~~~~~~~~ event', event);
  console.log('~~~~~~~~~~ context', context);

  const keys = await getFileKeys();
  const files = await Promise.all(keys.map(getFileFromS3));
  const parsed = await Promise.all(files.map(parseFile));

  console.log('Message received from SNS:', parsed); 

  return 'Ok';
};

module.exports.handleEmail()