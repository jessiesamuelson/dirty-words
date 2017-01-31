var dispatcher = require("../dispatcher");
var wordService = require('../services/wordService');

module.exports = {
  addWord: function (word) {
    console.log('WordActions addWord');
    dispatcher.dispatch({
     word: word,
     type: "word:addWord"
    });
  },

  deleteWord: function (word) {
    dispatcher.dispatch({
      word: word,
      type: "word:deleteWord"
    });
  },

  searchWord: function (word) {
    console.log('WordActions searchWord');
    console.log('word ~~>', word);
    // dispatcher.dispatch({
    //   word: word,
    //   type: "word:searchWord"
    // });
    // wordService.searchWord(word).then(function(res) {
    //   console.log('res', res);
    // })
    wordService.searchWord(word)
  }
}
