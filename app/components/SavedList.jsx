var React = require('react');
var ReactDOM = require('react-dom');
var Entry = require("./Entry.jsx")
var actions = require('../actions/WordActions');

module.exports = React.createClass({
  deleteWord: function(obj) {
    actions.deleteWord(obj);
  },

  render:function(){
    var _this = this;
    return(
      <div>
        <h1>Saved Section</h1>
        {
          this.props.words.map(function(s,index){
            return(
                <Entry info={s} key={'word' + index} icon="minus" onClick={_this.deleteWord}/>
            )
          })
        }
      </div>
    )
  }
});
