var React = require('react');
var ReactDOM = require('react-dom');
var SavedEntry = require("./SavedEntry.jsx")


module.exports = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Saved Section</h1>
        {
          this.props.words.map(function(s,index){
            return(
                <SavedEntry info={s} key={'word' + index} />
            )
          })
        }
      </div>
    )
  }
});
