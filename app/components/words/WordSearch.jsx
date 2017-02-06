import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SearchList from './SearchList.jsx';
import config from '../../config/config.js'
let key = config.key;

class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    let that = this;
    let input = $('#word-input').val();
    $.ajax({
      url:     'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + input,
      headers: {'X-Mashape-Key': key},
      error:   function(e) {console.log(e)},
      success: data => {
        var definitionArray = [];
        for ( var i = 0; i < data.list.length; i++ ) {
          var entry = { name: input, description: data.list[i].definition}
          definitionArray.push(entry);
        }
        console.log(definitionArray);
        this.setState( { results: definitionArray} )
        that.render()
      }
    })
  }

  render() {
    return (
      <div id="word-search">
        <h1>Choose a cool word to search on urban dictionary:</h1>
        <form className="word-input-form" onSubmit={e => this.submit(e)} >
          <input type="text" id="word-input" />
          <input type="submit" />
        </form>
        <h2 id="message"></h2>

        <SearchList results={this.state.results}/>
      </div>
    );
  }
}

export default WordSearch
