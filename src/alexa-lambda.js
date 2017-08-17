

function fetchLasooData(context, callback) {

  return callback(null, 'DONE');
}

exports.alexaLambda = (context, callback) => {
  fetchLasooData(context, callback);
};
