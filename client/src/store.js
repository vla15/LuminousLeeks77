import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import userReducer from './reducers/userReducer.js';
import queueReducer from './reducers/queueReducer.js';
import partyReducer from './reducers/partyReducer.js';
import newPartyReducer from './reducers/newPartyReducer.js';
import testSocketReducer from './reducers/testSocketReducer.js';
import { reducer as formReducer } from 'redux-form';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

let store = createStore(
  combineReducers({
    user: userReducer,
    queue: queueReducer,
    currentParty: partyReducer,
    newParty: newPartyReducer,
    socket: testSocketReducer,
    form: formReducer
  }),
  applyMiddleware(logger, thunk, socketIoMiddleware)
);

export default store;
