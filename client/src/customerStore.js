import {createStore, applyMiddleware} from 'redux';
import testReducer from './reducers/testReducer.js';
import logger from 'redux-logger';

export default createStore(testReducer, applyMiddleware(logger));
