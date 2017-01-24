import {createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';

const middleware = applyMiddleware(promise(), logger(), thunk);



const reducers = combineReducers({
  user: userReducer
});

const store = createStore(reducers, middleware);

export default store;
