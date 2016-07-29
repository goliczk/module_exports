// JavaScript Document

var randomMusic = require("./lyric.js");
var http = require("http");



http.createServer(function(request, response){
	var selection = Math.floor(Math.random()*randomMusic.length);
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write(randomMusic[selection]);
	response.end();
}).listen(8888);