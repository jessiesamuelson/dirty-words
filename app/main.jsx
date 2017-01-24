var React = require('react');
var ReactDOM = require('react-dom');
var SearchList = require('./components/SearchList.jsx');
var SavedList = require('./components/SavedList.jsx');
var $ = require('jquery');
var config = require('./config/config.js');
var key = config.key;

var wordStore = require("./stores/wordStore");
var _words = wordStore.getWords();
var _results = [];


function render(){
  ReactDOM.render(<SearchList results={_results}/>, document.getElementById('search'));
  ReactDOM.render(<SavedList words={_words}/>, document.getElementById('saved'));
}

wordStore.onChange(function(words){
  _words = words;
  render();
});

var input   = $('#word-input').val();
var message = input ? 'Showing results for "' + input + '"' : ""
var form = document.querySelector('.word-input-form');
form.onsubmit = function(e) {
  e.preventDefault();
  var that = this;
  var input = $('#word-input').val();
  $.ajax({
    url:     'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + input,
    headers: {'X-Mashape-Key': key},
    error:   function(e) {console.log(e)},
    success: function(data) {
      var definitionArray = [];
      for ( var i = 0; i < data.list.length; i++ ) {
        count = i + 1;
        var entry = { name: input + count, description: data.list[i].definition}
        definitionArray.push(entry);
      }
      console.log(definitionArray);
      _results = definitionArray;
      render();
    }
  })
};

var savedel = document.getElementById('saved');
render();
