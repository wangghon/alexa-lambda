
const alexaLambda = require('./alexa-lambda').alexaLambda;

exports.handler = (event, context, callback) => {
  console.log('alexa-lambda: start to handle intent');
  alexaLambda(event, context, (err, result) => {
    if (err) {
      console.log('alexa-lambda: intent handling failed');
      return callback(err, result);
    }
    console.log('alexa-lambda: intent handling complete');
    return callback(null, result);
  });
};
