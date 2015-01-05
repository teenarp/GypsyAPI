/*
Call Business modules here
*/
var route = function(path, params, callback){
  var place = require('./app/place');
  switch(path) {
    case '/place':
      console.log('Searching for place: '+ params['place']);
      place.getPlaceJSON(params['place'] ,callback);
      break;
    default:
      console.log('Invalid route');
  }
}

exports.route = route;
