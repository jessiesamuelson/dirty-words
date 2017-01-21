var React = require('react');
var Search = require('./Search.jsx');
var Saved = require('./Saved.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <div className='row'>
          <Search />
        </div>
        <div className='row'>
          <Saved />
        </div>
      </div>
    )
  }
});
