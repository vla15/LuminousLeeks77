import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import userReducer from './reducers/userReducer.js';
import queueReducer from './reducers/queueReducer.js';
import partyReducer from './reducers/partyReducer.js';
import testSocketReducer from './reducers/testSocketReducer.js';
import viewReducer from './reducers/viewReducer.js';
import queueChoiceReducer from './reducers/queueChoiceReducer.js';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

let store = createStore(
  combineReducers({
    user: userReducer,
    queue: queueReducer,
    party: partyReducer,
    socket: testSocketReducer,
    view: viewReducer,
    queueChoice: queueChoiceReducer
  }),
  applyMiddleware(logger, thunk, socketIoMiddleware)
);

export default store;
