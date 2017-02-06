import React, { Component } from 'react';
import $ from 'jquery';
import actions from '../../actions/WordActions';

class Entry extends Component {
  render() {
    return(
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {this.props.info.name}
          <span className='pull-right text-uppercase delete-button' onClick={ e => this.props.onClick(this.props.info)}>
            <i className={this.props.icon} aria-hidden="true"></i>
          </span>
        </div>
        <div className='panel-body'>{this.props.info.description}</div>
      </div>
    )
  }

}

export default Entry;
