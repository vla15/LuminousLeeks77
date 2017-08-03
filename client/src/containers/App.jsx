import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import partyActions from '../actions/partyActions.js';
import queueActions from '../actions/queueActions.js';
import userActions from '../actions/userActions.js';
import viewActions from '../actions/viewActions.js';
import queueChoiceActions from '../actions/queueChoiceActions.js';

import testSocketActions from '../actions/testSocketActions.js';

import { Header } from '../components/Header.jsx';
import Host from '../users/Host.jsx';
import Customer from '../users/Customer.jsx';
import QueueChoice from '../users/QueueChoice.jsx';
import { Loading } from '../components/Loading.jsx';


const mapStateToProps = state => { return { store: state }; };

const mapDispatchToProps = dispatch => {
  return {
    dispatch: {
      enqueueCustomer: (uid, qid, ps, fn, pn, lat, lng) => { dispatch(partyActions.enqueueCustomer(uid, qid, ps, fn, pn, lat, lng)); },
      dequeueCustomer: (queue_id, party_id, user_id) => { dispatch(partyActions.dequeueCustomer(queue_id, party_id, user_id)); },
      getPartyInfo: (queue_id, user_id) => { dispatch(partyActions.getPartyInfo(queue_id, user_id)); },
      updatePhoneNumber: phoneNumber => { dispatch(partyActions.updatePhoneNumber(phoneNumber)); },
      updatePartySize: partySize => { dispatch(partyActions.updatePartySize(partySize)); },
      updateFirstName: firstName => { dispatch(partyActions.updateFirstName(firstName)); },
      setPartyLocation: () => { dispatch(partyActions.setPartyLocation()); },
      updatePartyLocation: (party_id, lat, lng) => { dispatch(partyActions.updatePartyLocation(party_id, lat, lng)); },

      enqueueHost: (uid, qid, ps, fn, pn, lat, lng) => { dispatch(queueActions.enqueueHost(uid, qid, ps, fn, pn, lat, lng)); },
      dequeueHost: (queue_id, party_id, user_id) => { dispatch(queueActions.dequeueHost(queue_id, party_id, user_id)); },
      getQueueInfoCustomer: queue_id => { dispatch(queueActions.getQueueInfoCustomer(queue_id)); },
      getQueueInfoHost: queue_id => { dispatch(queueActions.getQueueInfoHost(queue_id)); },
      toggleQueue: queue_id => { dispatch(queueActions.toggleQueue(queue_id)); },

      sendUserId: (userId) => { dispatch(userActions.sendUserId(userId)); },
      setUserInfo: () => { dispatch(userActions.setUserInfo()); },

      setViewHost: (viewOption) => { dispatch(viewActions.setViewHost(viewOption)); },
      setViewQueueChoiceList: (viewOption) => { dispatch(viewActions.setViewQueueChoiceList(viewOption)); },
      goToProfile: () => { dispatch(userActions.goToProfile()); },

      getQueueChoiceList: (user_id) => { dispatch(queueChoiceActions.getQueueChoiceList(user_id)); },
      setQueueView: (queue_id, user_id) => { dispatch(queueChoiceActions.setQueueView(queue_id, user_id)); },

      testSocketConnect: () => { dispatch(testSocketActions.testSocketConnect()); }
    }
  };
};


class App extends React.Component {
  render() {
    return (
      <div>
        { this.props.store.user === null
          ? <Loading />
          : this.props.store.user.admin
            ? <Host redux={this.props} />
            : this.props.store.queueChoice.queue_view
              ? <Customer redux={this.props} />
              : <QueueChoice redux={this.props} /> }
      </div>

    );
  }

  componentDidMount() {
    this.props.dispatch.setUserInfo();
    this.props.dispatch.testSocketConnect();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
