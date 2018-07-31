import { createStore, applyMiddleware, combineReducers } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import mantras from './mantras';
import lines from './lines';

const reducers = combineReducers({ mantras, lines });
// const middleware = applyMiddleware(thunk, logger);
const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default store;
export * from './mantras';
export * from './lines';
