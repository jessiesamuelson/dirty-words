var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/Search.jsx');
var Saved = require('./components/Saved.jsx');
var SavedEntry = require('./components/SearchEntry.jsx');

var wordStore = require("./stores/wordStore");
var _words = wordStore.getWords();

function render(){
  console.log(_words);
  ReactDOM.render(<Search />, document.getElementById('search'));
  ReactDOM.render(<Saved words={_words}/>, document.getElementById('saved'));
}

wordStore.onChange(function(words){
  _words = words;
  render();
});

var savedel = document.getElementById('saved');
render();
