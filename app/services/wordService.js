var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/api/words";

module.exports = {
  addWord: function (word) {
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
  }
}
