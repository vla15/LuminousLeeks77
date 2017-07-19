import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';
import { getQueueInfo } from '../actions/queueActions.js';
import { getPartyInfo } from '../actions/partyActions.js';

import { Loading } from '../views/Loading.jsx';
import { Host } from '../views/Host.jsx';
import { Customer } from '../views/Customer.jsx';


const mapStateToProps = state => {
  return {
    user: state.user,
    queue: state.queue,
    party: state.party
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: () => { dispatch(setUserInfo()); },
    getQueueInfo: store => { dispatch(getQueueInfo(store)); },
    getPartyInfo: store => { dispatch(getPartyInfo(store)); },
  };
};

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.user === null
          ? <Loading />
          : this.props.user.admin
            ? <Host />
            : <Customer />}
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


/*
var customerState = {
  userInfo: {
    userId: 1,
    userType: 'customer',
    firstName: 'Shyan',
    lastName: 'Kashani',
    phone: '+15166591055',
    email: 'shyan.kashani@gmail.com',
  },
  queueInfo: {
    queueId: 1,
    partyCount: 5,
    nextWaitDuration: 20,
    nextWaitTime: {},
  },
  partyInfo: {
    partyId: 6,
    partyIndex: 4,
    myWaitDuration: 15,
    myWaitTime: {}
  }
  */