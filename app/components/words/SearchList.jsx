import React, { Component } from 'react';

import Entry from './Entry.jsx';
import actions from '../../actions/WordActions';

class SearchList extends Component {
  addWord(obj) {
    actions.addWord(obj);
  }

  render() {
    var _this = this;
    return(
      <div>
        <h1>Search Section</h1>
        {
          this.props.results.map(function(s,index){
            return(
                <Entry info={s} key={'results' + index} icon="fa fa-plus" onClick={_this.addWord} name={s.name}/>
            )
          })
        }
      </div>
    )
  }
}

export default SearchList;
