var http = require("http");

function handleRequest7000(req, res){
	res.end("We are ending the PORT_7000 request" + req.url);
}

function handleRequest7500(req, res){
	res.end("We are ending the PORT_7500 request" + req.url);
}

var server7000 = http.createServer(handleRequest7000);
/* var server7000 = http.createServer(handleRequest7000, function(){
	
	console.log("Hello you are the best!");

}); */
var server7500 = http.createServer(handleRequest7500);

var PORT_7000 = 7000;
var PORT_7500 = 7500;

server7000.listen(PORT_7000, function(){

	console.log("Hello you are the best!");

});

server7500.listen(PORT_7500, function(){

	console.log("You are worst!");
});