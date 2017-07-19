import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import {Provider} from 'react-redux';
import store from './store.js';

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
