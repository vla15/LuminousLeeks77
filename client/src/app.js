import React from 'react';
import ReactDOM from 'react-dom';

import Customer from './containers/Customer.jsx';
import customerStore from './customerStore.js';

import Host from './containers/Host.jsx';
import hostStore from './hostStore.js';

import {Provider} from 'react-redux';


if (true) {
  ReactDOM.render(
    <Provider store={customerStore}>
      <Customer />
    </Provider>,
    document.getElementById('root')
  );
}

if (false) {
  ReactDOM.render(
    <Provider store={hostStore}>
      <Host />
    </Provider>,
    document.getElementById('root')
  );
}
