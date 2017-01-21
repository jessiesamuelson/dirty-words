var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board.jsx');

function render(){
    ReactDOM.render(<Board />, document.getElementById('container'));
}
render();
