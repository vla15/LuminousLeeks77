import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import userReducer from './reducers/userReducer.js';
import queueReducer from './reducers/queueReducer.js';
import partyReducer from './reducers/partyReducer.js';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

let socketIo = io();
let socket = createSocketIoMiddleware(socketIo, 'server/');

let store = createStore(
  combineReducers({
    user: userReducer,
    queue: queueReducer,
    party: partyReducer
  }),
  applyMiddleware(logger, thunk, socket)
);

export default store;
