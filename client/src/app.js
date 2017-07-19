import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import View from './components/view';

import App from './containers/App.jsx';
import store from './store.js';

import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
