import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SavedList from './SavedList.jsx';
import wordStore from "../../stores/wordStore";
// var wordStore = require('../../stores/wordStore')


class WordSaved extends Component {
  constructor(props) {
    super(props);
    this.state = { words: [] }
    var _this = this;
    wordStore.onChange(getWordsCallback);

    function getWordsCallback(words) {
      _this.setState( { words: words } )
      _this.render();
    }
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
