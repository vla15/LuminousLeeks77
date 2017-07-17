import React from 'react';
import ReactDOM from 'react-dom';
import View from './components/view';
import Header from './components/header';

// const io = require('socket.io-client');
// const socket = io();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <View />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));