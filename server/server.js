var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var env = process.env.NODE_ENV;
var teststuff = process.env.MY_TEST;

//controllers
var schoolController = require("./controllers/wordController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(7777, function () {
  console.log('teststuff ~~>', teststuff);
  console.log('env ~~>', env);
  console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/wordfinder");
