/*
  CURL implementation in NodeJS
*/
var http = require('http');

var getHtml = function(url, callback){
    http.get(url, function(res) {
      var data = "";
      res.on('data', function (chunk) {
        console.log(data);
        data += chunk;
      });
      res.on("end", function() {
        console.log(data);
        callback(data);
      });
    }).on("error", function(e) {
      console.log(e);
      callback('');
    });
}
exports.getHtml = getHtml;
