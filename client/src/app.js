import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';

import Index from './pages/Index';
import Main from './components/container/Main';
import IndexContent from './components/container/IndexContent';
import CreateDoc from './components/container/CreateDoc';
import DocumentDisplay from './components/presentational/DocumentDisplay';
import ViewDocument from './components/presentational/ViewDocument';
import EditProfile from './components/container/EditProfile';

injectTapEventPlugin();



const main = document.getElementById('main');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={IndexContent}></IndexRoute>
        <Route path="main" component={Main}>
          <Route path="/" component={CreateDoc}></Route>
          <Route path="create_document" component={CreateDoc}></Route>
          <Route path="view" component={DocumentDisplay}></Route>
          <Route path="document/:id" component={ViewDocument}></Route>
          <Route path="edit_profile" component={EditProfile} />
        </Route>
      </Route>
    </Router>
  </Provider>, main);
