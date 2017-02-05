var React = require('react');
var Entry = require('./Entry.jsx');
var actions = require('../../actions/WordActions');

module.exports = React.createClass({
  addWord: function(obj) {
    actions.addWord(obj);
  },

  render:function(){
    console.log('in search list render');
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
});
