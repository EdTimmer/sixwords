import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import mantras from './mantras';
import mandalas from './mandalas';


const reducers = combineReducers({ mantras, mandalas });
const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

export default store;
export * from './mantras';
export * from './mandalas';
