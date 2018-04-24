//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//Sets up the Express static app
app.use(express.static("app/public"));

//Requires routing .js files
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

//Listens on port
app.listen(port,() => console.log ("Listening on port%s", port));




