import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { test } from '../actions/testActions.js';
import { Navigation } from '../components/Navigation.jsx';
import { Message } from '../components/Message.jsx';
import { QueueInfo } from '../components/QueueInfo.jsx';
import { EnqueueForm } from '../components/EnqueueForm.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: 1,
        role: 'customer'
      }
    };
  }

  componentDidMount() {
    // let option = {
    //   id: this.state.user.id,
    //   role: this.state.user.role
    // };
    this.socket = io();
    this.socket.on('connected', function(data) {
      console.log('testing socket.on data flow from server to client', data);
    });
    this.socket.emit('my other event', {hey: 'love'});
  }

  render() {
    return (
      <div>
        <Navigation />
        <Message/>
        <QueueInfo/>
        <EnqueueForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: () => {
      dispatch(test());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
