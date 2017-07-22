import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { enqueue, dequeue, getPartyInfo, updatePartySize, updateFirstName, updatePhoneNumber } from '../actions/partyActions.js';


import { setUserInfo } from '../actions/userActions.js';
import { getQueueInfo, toggleQueue } from '../actions/queueActions.js';
import { testSocketConnect } from '../actions/testSocketActions.js';


import { Header } from '../components/Header.jsx';
import { Host } from '../users/Host.jsx';
import { Customer } from '../users/Customer.jsx';
import { Loading } from '../components/Loading.jsx';



const mapStateToProps = state => {
  return {
    store: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: {
      setUserInfo: () => { dispatch(setUserInfo()); },
      getQueueInfo: () => { dispatch(getQueueInfo()); },
      getPartyInfo: () => { dispatch(getPartyInfo()); },
      enqueue: (userId, queueId, partySize, firstName, phoneNumber) => { dispatch(enqueue(userId, queueId, partySize, firstName, phoneNumber)); },
      updatePartySize: partySize => { dispatch(updatePartySize(partySize)); },
      updateFirstName: firstName => { dispatch(updateFirstName(firstName)); },
      updatePhoneNumber: phoneNumber => { dispatch(updatePhoneNumber(phoneNumber)); },
      toggleQueue: (userId, queueId) => { dispatch(toggleQueue(userId, queueId)); },
      testSocketConnect: () => { dispatch(testSocketConnect()); },
      dequeue: (partyId) => { dispatch(dequeue(partyId)); }
    }
  };
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header redux={this.props} />
        { this.props.store.user === null
          ? <Loading />
          : this.props.store.user.admin
            ? <Host redux={this.props} />
            : <Customer redux={this.props} /> }
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch.setUserInfo();
    this.props.dispatch.getQueueInfo();
    this.props.dispatch.testSocketConnect();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
