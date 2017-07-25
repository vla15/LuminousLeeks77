import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { enqueue, dequeue, getPartyInfo, updatePartySize, updateFirstName, updatePhoneNumber } from '../actions/partyActions.js';

import { setUserInfo, sendUserId } from '../actions/userActions.js';
import { getQueueInfoHost, toggleQueue, getQueueInfoCustomer } from '../actions/queueActions.js';
import { testSocketConnect } from '../actions/testSocketActions.js';
import { Header } from '../components/Header.jsx';
import Host from '../users/Host.jsx';
import Customer from '../users/Customer.jsx';
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


      getQueueInfoCustomer: queue_id => { dispatch(getQueueInfoCustomer(queue_id)); },
      getQueueInfoHost: queue_id => { dispatch(getQueueInfoHost(queue_id)); },

      getPartyInfo: (queue_id, user_id) => { dispatch(getPartyInfo(queue_id, user_id)); },
      enqueue: (user_id, queue_id, party_size, first_name, phone_number) => { dispatch(enqueue(user_id, queue_id, party_size, first_name, phone_number)); },
      updatePartySize: partySize => { dispatch(updatePartySize(partySize)); },
      updateFirstName: firstName => { dispatch(updateFirstName(firstName)); },
      updatePhoneNumber: phoneNumber => { dispatch(updatePhoneNumber(phoneNumber)); },
      toggleQueue: queue_id => { dispatch(toggleQueue(queue_id)); },
      dequeue: (queue_id, party_id) => { dispatch(dequeue(queue_id, party_id)); },
      testSocketConnect: () => { dispatch(testSocketConnect()); },
      sendUserId: (userId) => { dispatch(sendUserId(userId)); }
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
    this.props.dispatch.testSocketConnect();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
