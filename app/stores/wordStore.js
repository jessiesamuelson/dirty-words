var dispatcher = require('../dispatcher');

function WordStore() {
  var listeners = [];
  var words = [
    { name: 'stuff1', description: 'usually refers to something sexual.' },
    { name: 'stuff2', description: 'everything you can think of' },
    { name: 'stuff3', description: 'A girl that means alot to you...' },
    { name: 'stuff4', description: 'to stuff = to fuck' }
  ];

  function getWords() {
    return words;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function addWord(word) {
    words.push(word)
    triggerListeners();
  }

  function deleteWord(word) {
    var _index;
    words.map(function (s, index) {
      if (s.name === word.name) {
        _index = index;
      }
    });
    words.splice(_index, 1);
    triggerListeners();
  }

  function triggerListeners() {
    listeners.forEach(function (listener) {
      listener(words);
    });
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
      getWords: getWords,
      onChange: onChange
  }
}

module.exports = WordStore();
