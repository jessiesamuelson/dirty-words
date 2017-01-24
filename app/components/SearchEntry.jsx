var React = require('react');
var $ = require('jquery');
var actions = require('../actions/WordActions');

module.exports = React.createClass({
  addWord: function(e) {
    e.preventDefault();
    actions.addWord(this.props.info);
    console.log(this.props.info);
  },

  render:function(){
    return(
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {this.props.info.name}
          <span className='pull-right text-uppercase delete-button' onClick={this.addWord}>&#43;</span>
        </div>
        <div className='panel-body'>{this.props.info.description}</div>
      </div>
    )
  }});
