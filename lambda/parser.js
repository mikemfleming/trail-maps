const parse = require('parse-email');

module.exports = function (file) {
  return parse(file)
    .then(({
      subject = '',
      text = '',
      date = '',
      messageId = ''
    }) => {
      const { lat, lng } = extractCoordinates(text);

      return {
        subject,
        date,
        messageId,
        text,
        lat,
        lng
      };
    });
};

function extractCoordinates (text) {
  const sentenceWithCoordinates = text.split('\n\n')
    .filter(s => /Mike Fleming sent this message from:/.test(s))
    .pop();
  
  if (!sentenceWithCoordinates) {
    return {
      lat: ':(',
      lng: ':('
    };
  }

  const coordinates = sentenceWithCoordinates.split(' ')
    .filter(s => /(\d|-|\.)+/g.test(s))
    .map(String);
  
  return {
    lat: coordinates[0],
    lng: coordinates[1]
  };
}
