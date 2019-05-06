// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//var htmlRoutes = require("./app/routing/htmlRoutes.js");
//var apiRoutes = require("./app/routing/apiRoutes.js");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//htmlRoutes(app);
//apiRoutes(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//load routes into app by passing app into route functions
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});