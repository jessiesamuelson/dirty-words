var express = require("express");
var path = require("path");
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

//controllers
// var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
// app.use(bodyParser.json())
// app.use("/api", schoolController);

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});
// Connect to mongodb database
// mongoose.connect("mongodb://localhost/schoolfinder");
