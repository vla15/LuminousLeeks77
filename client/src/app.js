import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import View from './components/view';

import Customer from './containers/Customer.jsx';
import customerStore from './customerStore.js';

import Host from './containers/Host.jsx';
import hostStore from './hostStore.js';

import {Provider} from 'react-redux';

import axios from 'axios';

axios.get('/userInfo')
.then(result => {
  if (result.data.admin === null) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  } else {
    console.log('monkey')
  }
})
