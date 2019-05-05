// Dependencies
// =============================================================
var express = require("express");
var htmlRoutes = require("./html-routes.js");
var apiRoutes = require("./apiRoutes.js")
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//loud routes into app by passing app into route functions
htmlRoutes(app);
apiRoutes(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});