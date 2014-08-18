var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Dog is running');
	setTimeout(function(){
		response.write('Dog is done');
		response.end(); //tells the receieving server that there is nothing left. 
	}, 5000);
}).listen(8080);

//Notice how this is unblocking. 