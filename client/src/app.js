import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import View from './components/view';

const socket = io();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    // this.socket() 
  }
  render() {
    return (
      <div>
        <View />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));