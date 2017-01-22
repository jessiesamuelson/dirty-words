var React = require('react');
var SearchEntry = require('./SearchEntry.jsx');
var $ = require('jquery');
var config = require('../config/config.js');
var key = config.key;


module.exports = React.createClass({
  getInitialState: function(){
    return {
      entries: []
    };
  },

  submit: function(e){
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
          var entry = data.list[i].definition;
          definitionArray.push(entry);
        }
        that.setState({ entries: definitionArray })
      }
    })

  },

  eachEntry: function(entry, i) {
    return (
      <SearchEntry key={i}>{entry}</SearchEntry>
    )
  },

  render: function() {
    var input   = $('#word-input').val();
    var message = input ? 'Showing results for "' + input + '"' : ""

    return (
      <div className="search">
        <h1>Choose a word to search on urban dictionary:</h1>
        <form className="word-input-form" onSubmit={this.submit}>
          <input type="text" id="word-input" />
          <input type="submit" />
        </form>
        <h2>{message}</h2>
        <div>
          {this.state.entries.map(this.eachEntry)}
        </div>
      </div>
    )
  }
});
