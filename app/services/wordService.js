var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/api/words";

var teststuff = process.env.MY_TEST;


module.exports = {
  addWord: function (word) {
    console.log('wordService addWord');
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl,
        data: JSON.stringify(word),
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  },
  getWords: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl,
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  deleteWord: function (word) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl + "/" + word._id,
        method: "DELETE",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  searchWord: function(input) {
    console.log('wordService searchWord');

    var config = require('../config/config.js');
    var key = config.key;

    $.ajax({
      url:     'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + input,
      headers: {'X-Mashape-Key': key},
      error:   function(e) {console.log(e)},
      success: function(data) {
        var definitionArray = [];
        for ( var i = 0; i < data.list.length; i++ ) {
          var entry = { name: input, description: data.list[i].definition}
          definitionArray.push(entry);
        }
        console.log('definitionArray ~~>', definitionArray);
        return definitionArray;
      }
    })
  }
}
