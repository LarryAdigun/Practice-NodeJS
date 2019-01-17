// //Video 4

// setTimeout(function() {
//     console.log("3 second have passed")
// }, 3000)

// //setTimeout, clearInterval, setInterval- Different ways of setting times 

// //directory name and file name
// console.log(__dirname);
// console.log(__filename);

// //Video 5

// // normal function expression
// function sayHi() {
//     console.log ("hi")
// }

// sayHi("Larry");

// var sayBye = function(){
//     console.log ('bye')
// }

// function callfunction(fun) {
//     fun();
// }
// callfunction(sayBye)

// // Video 6
// //Used if you would like to use code in another file

//var stuff = require("./stuff");


// Video 7
// console.log(stuff.counter(["1","2","3"]))

// console.log(stuff.adder(5,6))

//Video 8

// var events = require("./events")
// var util = require("util")


// var myEmitter = new events.EventEmitter();
// myEmitter.on("some event", function(mssg){
//     console.log(mssg);
// });
// myEmitter.emit("someEvent", "The event was emmitted");

// var person = function(name) {
//     this.name = name;
// };
// util.inherits(person, events.EventEmitter);

// var james = new person("james");
// var james = new person("larry");
// var james = new person("ryu");

// var people =[ "james","mary","ryu"];

// people.forEach(function(person){
//     person.on("speak", function(mssg) {
//         console.log();
//     });
    
// });
    
//video 10
//Generally the module name and the variable name both are same
var fs = require('fs');

// fs.readFileSync
// Sync' part allows the node to read the file synchronusly meaning all file is read first before going through other code. 
var sample = fs.readFileSync('sample.txt','utf8');
// utf8 is encoding format| you can find clean explanation here at http://stackoverflow.com/a/15128103/5388823 
console.log(sample);

// this line of code creates an another file output.txt and writes the data in sample into the log.
fs.writeFileSync('output.txt',sample);

//This is reading the file without blocking the code 
var fs = require('fs');

var file = fs.readFile('input.txt','utf8',function(err,data){
    fs.writeFile('writeme.txt',data);
    console.log(data);
});

console.log('This is an instruction outside the sync file system.');