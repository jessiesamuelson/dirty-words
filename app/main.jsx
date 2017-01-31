var React = require('react');
var ReactDOM = require('react-dom');
var SearchList = require('./components/SearchList.jsx');
var SavedList = require('./components/SavedList.jsx');
var actions = require('./actions/WordActions');
var wordService = require('./services/wordService');

var $ = require('jquery');
var config = require('./config/config.js');
var key = config.key;

var token = window.localStorage.getItem('token');

var wordStore = require("./stores/wordStore");

var _words = [];
var _results = [];

var getWordsCallback = function(words) {
  _words = words;
  render();
}



function render(){
  console.log('_results render ~~>', _results);
  ReactDOM.render(<SearchList results={_results}/>, document.getElementById('search'));
  ReactDOM.render(<SavedList words={_words}/>, document.getElementById('saved'));
}

wordStore.onChange(getWordsCallback);

var input   = $('#word-input').val();
var message = input ? 'Showing results for "' + input + '"' : ""
var form = document.querySelector('.word-input-form');


function submitFunc(e) {
  e.preventDefault();
  var that = this;
  var input = $('#word-input').val();
  _results = wordService.searchWord(input);
  console.log('_results submit ~~>', _results);


  // $.ajax({
  //   url:     'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + input,
  //   headers: {'X-Mashape-Key': key},
  //   error:   function(e) {console.log(e)},
  //   success: function(data) {
  //     var definitionArray = [];
  //     for ( var i = 0; i < data.list.length; i++ ) {
  //       var entry = { name: input, description: data.list[i].definition}
  //       definitionArray.push(entry);
  //     }
  //     // console.log(definitionArray);
  //     _results = definitionArray;
  //   }
  // })
  render();
}

form.addEventListener('submit', function(e){
  submitFunc(e);
}, false);

render();
