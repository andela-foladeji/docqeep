import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import docReducer from './reducers/docReducer';

const middleware = applyMiddleware(promise(), logger(), thunk);


const reducers = combineReducers({
  user: userReducer,
  doc: docReducer
});

const store = createStore(reducers, middleware, autoRehydrate());
persistStore(store);

export default store;
