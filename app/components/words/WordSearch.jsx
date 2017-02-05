import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SearchList from './SearchList.jsx';
import SavedList from './SavedList.jsx';

import config from '../../config/config.js'
let key = config.key;

import wordStore from '../../stores/wordStore';
let _words = [];
let _results = [];



class WordSearch extends Component {
  submit(e) {
    e.preventDefault();
    let that = this;
    let input = $('#word-input').val();
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
        console.log(definitionArray);
        _results = definitionArray;
        setTimeout(that.render.bind(that), 1000)
        console.log('in success');
      }
    })
  }

  render() {
    console.log('in render');
    console.log('this', this);
    console.log('_results ~~>', _results);
    return (
      <div id="word-search">
        <h1>Choose a cool word to search on urban dictionary:</h1>
        <form className="word-input-form" onSubmit={this.submit.bind(this)} >
          <input type="text" id="word-input" />
          <input type="submit" />
        </form>
        <h2 id="message"></h2>

        <SearchList results={_results}/>
      </div>
    );
  }
}

export default WordSearch
