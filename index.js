var server = require('./modules/server'),
  route = require('./modules/router');
server.start(route.route);
