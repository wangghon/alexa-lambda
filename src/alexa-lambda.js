
import request from 'request';

import xml2js from 'xml2js';

const parser = new xml2js.Parser();

const lassoUrl = 'https://www.lasoo.com.au/XMLFeed?clientkey=ulasoo&type=catalogues';

function fetchLasooData(event, context, callback) {

  request(lassoUrl, { 'encoding': null}, (err, response, body) => {
    if (err) {
      return callback(err);
    }
    console.log('event =', event);
    console.log('start to parser');
    return parser.parseString(body, (error, result) => {
      if (err) {
        console.log('parser', error);
        return callback(err);
      }

      console.log('input name = ', event.name);
      result.objects.object.forEach((item) => console.log(item.retailerName[0]));
      const retailerCatalogues = result.objects.object.filter((item) => {
        const lowName = item.retailerName[0].toLowerCase();

        return lowName.includes(event.name.toLowerCase());
      });
      console.log('brief list ');
      const infoItems = retailerCatalogues.map((item) => {
        const brief = {
          'name': item.name[0],
          'retailerName': item.retailerName[0],
          'start_date': item.start_date[0],
          'end_date': item.end_date[0]
        };
        return brief;
      });
      infoItems.forEach((item) => console.log(item));

      return callback(null, infoItems);
    });
});
}

exports.alexaLambda = (event, context, callback) => {
  fetchLasooData(event, context, callback);
};
