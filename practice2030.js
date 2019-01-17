// video22-Nodemon
// allows you to make changes without having to keepo typing in node

// video23-express
// -really easy and flexible routing system
// -integrates many template engines
// -contains middleware
// Get-Type a url into an address/Post- Putting in data/ Deleting data/Put?
var express = require("express");

var app = express();


app.get("/", function(req,res){
  res.send('this is the home page')
});

app.get("/contact", function(req,res){
  res.send('this is the contact page')
});

app.listen(3000);

//video24- Changing get request for specific ids to be more specific
var express = require("express");

var app = express();


app.get("/", function(req,res){
  res.send('this is the home page')
});

app.get("/contact", function(req,res){
  res.send('this is the contact page')
});

app.get("/profile/:id", function(req,res){
  res.send('You requested to see a profile with the id of' + req.params.id);
});

app.listen(3000);