import { createStore, combineReducers, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import adultosReducer from './adultosReducer';

const rootReducer = combineReducers({
  adultosReducer
});

const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

export default composeStoreWithMiddleware(rootReducer);
