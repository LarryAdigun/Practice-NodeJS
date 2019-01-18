// video22-Nodemon
// allows you to make changes without having to keepo typing in node

// video23-express
// -really easy and flexible routing system
// -integrates many template engines
// -contains middleware
// Get-Type a url into an address/Post- Putting in data/ Deleting data/Put?
// var express = require("express");

// var app = express();


// app.get("/", function(req,res){
//   res.send('this is the home page')
// });

// app.get("/contact", function(req,res){
//   res.send('this is the contact page')
// });

// app.listen(3000);

// //video24- Changing get request for specific ids to be more specific
// var express = require("express");

// var app = express();


// app.get("/", function(req,res){
//   res.send('this is the home page')
// });

// app.get("/contact", function(req,res){
//   res.send('this is the contact page')
// });

// app.get("/profile/:id", function(req,res){
//   res.send('You requested to see a profile with the id of' + req.params.id);
// });

// app.listen(3000);
// //video25-Use template engines inject dynamic data and databases!
// var express = require("express");

// var app = express();

// app.set("view engine", "ejs");


// app.get("/", function(req,res){
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", function(req,res){
//   res.sendFile(__dirname + "/contact.html");
// });
// //use to output data from a js file, check html
// app.get("/profile/:name", function(req,res){
//   var data = {age: 29, job: "ninja"};

//   res.render("profile", {person: req.params.name, data: data});
// });

// app.listen(3000);

// //Video 26-Testing engines continued
// var express = require("express");

// var app = express();

// app.set("view engine", "ejs");


// app.get("/", function(req,res){
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", function(req,res){
//   res.sendFile(__dirname + "/contact.html");
// });
// //use to output data from a js file, check html
// app.get("/profile/:name", function(req,res){
//   var data = {age: 29, job: "ninja", hobbies:["eating","fighting","walking"]};

//   res.render("profile", {person: req.params.name, data: data});
// });

// app.listen(3000);

// //video27-Creating Partial Views 
// var express = require("express");

// var app = express();

// app.set("view engine", "ejs");


// app.get("/", function(req,res){
//   res.render("index");
// });

// app.get("/contact", function(req,res){
//   res.render("contact");
// });
// //use to output data from a js file, check html
// app.get("/profile/:name", function(req,res){
//   var data = {age: 29, job: "ninja", hobbies: ["eating","fighting","walking"]};

//   res.render("profile", {person: req.params.name, data: data});
// });

// app.listen(3000);

//video 28-Static files and middleware
var express = require("express");

var app = express();

app.set("view engine", "ejs");
//middle for css, use next to go onto a another middleware
//function built into express is static
app.use("/assets", express.static("assets"));



app.get("/", function(req,res){
  res.render("index");
});

app.get("/contact", function(req,res){
  res.render("contact");
});
//use to output data from a js file, check html
app.get("/profile/:name", function(req,res){
  var data = {age: 29, job: "ninja", hobbies: ["eating","fighting","walking"]};

  res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000);
