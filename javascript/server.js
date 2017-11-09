var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)

var tables = [];
var waitlist = [];


//  links to html ==========================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../html/index.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "../html/view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../html/reserve.html"));
});
// links to html ===========================================



// links to JSON ==========================================
// Get all characters
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Get all characters
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});
// links to JSON ===========================================



// Make a reservation ======================================
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newtable = req.body;
  var result = true;

  console.log(newtable);

  if(tables.length < 5) {
  	tables.push(newtable);
  	result = true;
  }
  else {
  	waitlist.push(newtable);
  	result = false;
  }

  res.json(result);
});
// Make a reservation ========================================



// Clear tables and waitlist =================================
app.get("/api/clear", function(req, res) {
  tables = [];
  waitlist = [];

  res.sendFile(path.join(__dirname, "../html/view.html"));
});
// Clear tables and waitlist =================================



// Server Starting... ========================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Server Starting... ========================================

