import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import View from './components/view';

import App from './containers/App.jsx';

import {Provider} from 'react-redux';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
