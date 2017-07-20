import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';
import { getQueueInfo } from '../actions/queueActions.js';

import { Host } from '../users/Host.jsx';
import { Customer } from '../users/Customer.jsx';

import { Header } from '../components/Header.jsx';
import { Loading } from '../components/Loading.jsx';


const mapStateToProps = state => {
  return {
    store: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: () => { dispatch(setUserInfo()) },
    getQueueInfo: store => { dispatch(getQueueInfo(store)) }
  };
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header store={this.props.store} />
        { this.props.store.user === null
        ? <Loading />
        : this.props.store.user.admin
        ? <Host store={this.props.store} />
        : <Customer store={this.props.store} /> }
      </div>
    );
  }

  componentDidMount() {
    this.props.setUserInfo();
    this.socket = io();
    this.socket.on('connected', function(data) {
      console.log('testing socket.on data flow from server to client', data);
    });
    this.socket.emit('my other event', {hey: 'love'});
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
