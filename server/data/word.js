var mongoose = require("mongoose");
var wordSchema = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("word", wordSchema);
