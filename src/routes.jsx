import React from 'react';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import hashHistory from 'react-router/lib/hashHistory'
import IndexRedirect from 'react-router/lib/IndexRedirect'

var App = require('./components/App.jsx');
var FirstSVG = require('./components/FirstSVG.jsx');

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route name="FirstSVG" path="/FirstSVG" component={FirstSVG} />
      <IndexRedirect to="/FirstSVG" />
    </Route>
  </Router>
)
