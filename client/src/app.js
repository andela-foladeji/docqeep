import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';

import Index from './pages/Index';
import Main from './components/container/Main';
import IndexContent from './components/container/IndexContent';
injectTapEventPlugin();



const main = document.getElementById('main');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={IndexContent}></IndexRoute>
        <Route path="main" component={Main}></Route>
      </Route>
    </Router>
  </Provider>, main);
