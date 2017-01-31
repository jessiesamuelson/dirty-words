var dispatcher = require('../dispatcher');
var wordService = require('../services/wordService');

function WordStore() {
  var listeners = [];

  function getWords(cb) {
    wordService.getWords().then(function(res) {
      cb(res);
    })
  }

  function onChange(listener) {
    getWords(listener);
    listeners.push(listener);
  }

  function addWord(word) {
    console.log('wordStore addWord');
    wordService.addWord(word).then(function(res) {
      console.log('res', res);
      triggerListeners();
    })
  }

  function deleteWord(word) {
    wordService.deleteWord(word).then(function(res) {
      console.log('res', res);
      triggerListeners();
    })
  }

  function triggerListeners() {
    getWords(function(res) {
      listeners.forEach(function (listener) {
        listener(res);
      });
    })
  }

  function searchWord(word) {
    console.log('WordStore addWord');
    wordService.searchWord(word).then(function(res) {
      console.log('res', res);
      triggerListeners();
    })
  }

  dispatcher.register(function (payload) {
    var split = payload.type.split(':');
    if (split[0] === 'word') {
      switch (split[1]) {
        case 'addWord':
          addWord(payload.word);
          break;
        case 'deleteWord':
          deleteWord(payload.word);
          break;
      }
    }
  });

  return {
    onChange: onChange
  }
}

module.exports = WordStore();
