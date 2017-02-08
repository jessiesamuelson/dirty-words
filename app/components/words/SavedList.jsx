import React, { Component } from 'react';

import Entry from './Entry.jsx';
import actions from '../../actions/WordActions';


class SavedList extends Component {
  deleteWord(obj) {
    actions.deleteWord(obj);
  }

  render() {
    var _this = this;
    return(
      <div>
        <h1>Saved Section</h1>
        {
          this.props.words.map(function(s,index){
            return(
              <Entry info={s} key={'word' + index} icon="fa fa-minus" onClick={_this.deleteWord}/>
            )
          })
        }
      </div>
    )
  }
}

export default SavedList;
