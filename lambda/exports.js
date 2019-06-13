const s3 = require('./s3');
const ddb = require('./ddb');
const parser = require('./parser');

function log(msg, obj) {
  console.log('~~~~~~~~~~', msg, JSON.stringify(obj, null, 4));
}

exports.handleEmail = async (event, context) => {
  log('event:', event);
  log('context:', context);

  const keys = await s3.getFileKeys();
  const files = await Promise.all(keys.map(s3.getFileFromKey));
  const parsedFiles = await Promise.all(files.map(parser));

  log('parsed files:', parsedFiles); 

  await Promise.all(parsedFiles.map(ddb.writeItem))
    .then(d => log('wrote # items to db:', d.length))
    .catch(e => log('failed to write to db:', e));

  return 'Ok';
};

module.exports.handleEmail()