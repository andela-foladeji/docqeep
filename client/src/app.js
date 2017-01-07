import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

import Index from './pages/Index'
injectTapEventPlugin();



const main = document.getElementById('main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
    </Route>
  </Router>, main);
