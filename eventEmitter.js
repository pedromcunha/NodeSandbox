// var EventEmitter = require('events').EventEmitter;
// var logger = new EventEmitter(); //instantiate new object from that constructor

// logger.on('error', function(message){ //Listens for events
// 	console.log('ERR: '+message);
// });

// logger.emit('error', 'Spilled Milk');

// logger.emit('error', 'Eggs Cracked');

var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.listen(8080);