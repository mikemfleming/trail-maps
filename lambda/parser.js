const parse = require('parse-email');

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
module.exports = function (file) {
  return parse(file)
    .then(({ subject, text, date, messageId }) => ({ subject, text, date, messageId }));
};
