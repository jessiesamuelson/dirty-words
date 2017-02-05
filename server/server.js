var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var schoolController = require("./controllers/wordController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../app/dist', 'index.html'))
})

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});


// Connect to mongodb database
mongoose.connect("mongodb://localhost/wordfinder");
