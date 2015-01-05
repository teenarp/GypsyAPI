var start = function(route) {
  var http  = require('http'),
    url = require('url'),
    queryString = require('querystring');

  onRequest = function(request, response) {
    var pathname = url.parse(request.url).pathname,
        params = queryString.parse(url.parse(request.url).query);

    console.log('Request for ' + pathname + ' received.');

    route(pathname, params, function (data){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    });
  }

  http.createServer(onRequest).listen(1034);
  console.log('GYPSY on the road again..!!');
}

exports.start = start;
