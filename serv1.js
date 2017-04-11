var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequest(request, response) {
	  response.end("It Works!! You have a nice butt " + request.url);
	}

function handleRequest2(request, response) {
	  response.end("It Works!! Your hair sucks" + request.url);
	}

var server = http.createServer(handleRequest);
	server.listen(PORT1, function() {
		  console.log("Server listening on: http://localhost:%s", PORT1);
		});

var server2 = http.createServer(handleRequest2);
	server2.listen(PORT2, function() {
		  console.log("Server listening on: http://localhost:%s", PORT2);
		});