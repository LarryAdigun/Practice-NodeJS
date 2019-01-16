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

//video 15- Writing data that you have written
// var http = require ("http");
// var fs = require ("fs");
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', "utf8")
//
// myReadStream.on("data", function(chunk) {
//   console.log("new chunk received")
//   myWriteStream.write(chunk)
// })

//video 16- Pipe-Takes data from a read stream and pipe it into a write stream. Instead of manually listening the pipe does it for you. Better for performance than reading the whole file and sending it
var http = require ("http");
var fs = require ("fs");
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', "utf8")
//
// myReadStream.pipe(myWriteStream);

var http = require("http")
var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', "utf8");
    myReadStream.pipe(res);

});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs");

//Video 17-Sending along HTML

var http = require("http")
var fs = require("fs")
var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', "utf8");
    myReadStream.pipe(res);

});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs");

//Video 18- Sending JSON to the client
var http = require("http")
var fs = require("fs")
var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "application/json"});
    var myObj = {
      name: "RYU",
      job: "ninja",
      age: 29
    };
    res.end(JSON.stringify(myObj))
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs");

// video 19- Creating routing to your page
var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req,res){
  console.log("request was made:" + req.url);
    if(req.url === '/home' || req.url === "/" ) {
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if(req.url === "/contact") {
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream(__dirname + "/contact.html").pipe(res);
    }else if(req.url === "/api/ninjas") {
      var ninjas = [{name: "ryu", age: 29}, {name: "yoshi", age: 32}]
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(ninjas))
    }else {
      res.writeHead(404, {"Content-Type": "text/html"});
      fs.createReadStream(__dirname + "/404.html").pipe(res);


    }
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs");
