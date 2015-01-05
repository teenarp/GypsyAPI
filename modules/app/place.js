var curl = require('../curl');

var parsePlaceHTML = function(html){
  return html;
}
var encodePlace = function(place){
  return place;
}
var getPlaceJSON = function(place, callback){
  console.log('en.wikivoyage.org' + '/wiki/'+encodePlace(place));
  //parsePlaceHTML(curl.getHtml('en.wikivoyage.org/wiki/'+encodePlace(place), callback));
  parsePlaceHTML(curl.getHtml('http://www.google.com', callback));
}
exports.getPlaceJSON = getPlaceJSON;
