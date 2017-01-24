var React = require('react');
var $ = require('jquery');
var actions = require('../actions/WordActions');

module.exports = React.createClass({

  render:function(){
    return(
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {this.props.info.name}
          <span className='pull-right text-uppercase delete-button' onClick={ e => this.props.onClick(this.props.info)}>{this.props.icon}</span>
        </div>
        <div className='panel-body'>{this.props.info.description}</div>
      </div>
    )
  }});
