var Hapi = require('hapi');
var swaggerHapi = require('swagger-hapi');

// initialize http listener on a default port
var server = new Hapi.Server();

// initialize SwaggerHapi and start the server
swaggerHapi.create({ appRoot: __dirname }, function(err, swaggerHapi) {
  if (err) { throw err; }
  var port = process.env.PORT || 3000;
  server.connection({ port: port });
  server.address = function() {
    return { port: port };
  };
  // register SwaggerHapi plugin
  server.register(swaggerHapi.plugin, function(err) {
    if (err) { return console.error('Failed to load plugin:', err); }
    // start the server
    server.start(function() {
      console.log('Server started on ' + server.info.uri);
    });
  });
});