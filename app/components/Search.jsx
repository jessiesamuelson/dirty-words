var React = require('react');
var SearchEntry = require('./SearchEntry.jsx');

module.exports = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Search Section</h1>
        {
          this.props.results.map(function(s,index){
            return(
                <SearchEntry info={s} key={'results' + index} />
            )
          })
        }
      </div>
    )
  }
});
