import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './reducers/userReducer.js';
import logger from 'redux-logger';

export default createStore(combineReducers({ user: userReducer }), applyMiddleware(logger));
