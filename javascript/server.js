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
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
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



app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  // characters.push(newcharacter);

  res.json(newcharacter);
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});