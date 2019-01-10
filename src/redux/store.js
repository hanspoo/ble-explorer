import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import errorMiddleware from './errorMiddleware';

import adultosReducer from './adultosReducer';

const rootReducer = combineReducers({
  adultosReducer
});

const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware(), errorMiddleware)(
  createStore
);

export default composeStoreWithMiddleware(rootReducer);
