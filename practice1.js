//video 11- come back to video 11!

//video 12- Didn't work well
var http = require("http")
var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hey Ninjas")
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs");

//Video 12

var http = require("http")
var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hey Ninjas")
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs");

//Video 13
//Buffer - temporary storage space for a large chunk of data
//Stream of data that flows over time from one place to another

//video 14
//writable streams- allow node js to write data to  streams
//readable stream- read data to the streams
//Dupleax- misture of both
var http = require ("http");
var fs = require ("fs");
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', "utf8");

myReadStream.on("data", function(chunk) {
  console.log("new chunk received")
  console.log(chunk)
})

//video 15
