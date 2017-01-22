var React = require('react');
var $ = require('jquery');
var actions = require('../actions/WordActions');

module.exports = React.createClass({
  addWord: function(e) {
    e.preventDefault();
    console.log(this.props.info);
    // actions.addWord(this.props.info);
  },

  render: function() {
    var input = $('#word-input').val();
    return (
      <div className="search-entry">
        <p>{input}: {this.props.children}</p>
        <span className='pull-right text-uppercase delete-button' onClick={this.addWord}>&times;</span>
      </div>
    )
  }
});
