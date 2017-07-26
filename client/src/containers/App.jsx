import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import partyActions from '../actions/partyActions.js';
import queueActions from '../actions/queueActions.js';
import userActions  from '../actions/userActions.js';

import testSocketActions from '../actions/testSocketActions.js';

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
      enqueueCustomer: (uid, qid, ps, fn, pn) => { dispatch(partyActions.enqueueCustomer(uid, qid, ps, fn, pn)); },
      dequeueCustomer: (queue_id, party_id) => { dispatch(partyActions.dequeueCustomer(queue_id, party_id)); },
      getPartyInfo: (queue_id, user_id) => { dispatch(partyActions.getPartyInfo(queue_id, user_id)); },
      updatePhoneNumber: phoneNumber => { dispatch(partyActions.updatePhoneNumber(phoneNumber)); },
      updatePartySize: partySize => { dispatch(partyActions.updatePartySize(partySize)); },
      updateFirstName: firstName => { dispatch(partyActions.updateFirstName(firstName)); },

      enqueueHost: (uid, qid, ps, fn, pn) => { dispatch(queueActions.enqueueHost(uid, qid, ps, fn, pn)); },
      dequeueHost: (queue_id, party_id) => { dispatch(queueActions.dequeueHost(queue_id, party_id)); },
      getQueueInfoCustomer: queue_id => { dispatch(queueActions.getQueueInfoCustomer(queue_id)); },
      getQueueInfoHost: queue_id => { dispatch(queueActions.getQueueInfoHost(queue_id)); },
      toggleQueue: queue_id => { dispatch(queueActions.toggleQueue(queue_id)); },

      setUserLocation: (profile_id, lat, lng) => { dispatch(userActions.setUserLocation(profile_id, lat, lng)); },
      sendUserId: (userId) => { dispatch(userActions.sendUserId(userId)); },
      setUserInfo: () => { dispatch(userActions.setUserInfo()); },

      testSocketConnect: () => { dispatch(testSocketActions.testSocketConnect()); }
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
