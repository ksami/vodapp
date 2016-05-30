import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import App from './components/app.js';
import MainLayout from './components/main-layout.js';
import MoviesList from './components/movies-list.js';
import History  from './components/history.js';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={MainLayout}>
        <IndexRoute component={MoviesList} />
        <Route path="history" component={History} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
