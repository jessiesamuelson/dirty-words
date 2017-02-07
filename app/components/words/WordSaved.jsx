import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SavedList from './SavedList.jsx';
import wordStore from "../../stores/wordStore";




class WordSaved extends Component {
  constructor(props) {
    super(props);
    let currentWords = wordStore.getWords(
      function() {
        console.log('got words');
      }
    );
    console.log('currentWords ~~>', currentWords);
    this.state = { words: [] };
    function getWordsCallback(words) {
      this.setState( { words: words } )
    }


    wordStore.onChange(function( ){
      getWordsCallback();
      console.log('onchnge');
    });
  }

  render() {
    return (
      <div id="word-saved">
        <SavedList words={this.state.words}/>
      </div>
    );
  }
}

export default WordSaved
