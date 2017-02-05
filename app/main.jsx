import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import WordList from './components/WordList.jsx';
import Nav from './components/common/Nav.jsx';
import Home from './components/common/Home.jsx';
import About from './components/common/About.jsx';
import WordSearch from './components/words/WordSearch.jsx';

render (
  <Router history={browserHistory}>
    <Route component={Nav}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/words" component={WordSearch}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
