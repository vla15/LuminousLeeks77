import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';
import { getQueueInfo } from '../actions/queueActions.js';
import { getPartyInfo } from '../actions/partyActions.js';
import { testSocketConnect } from '../actions/testSocketActions.js';

import { Loading } from '../views/Loading.jsx';
import { Host } from '../views/Host.jsx';
import { Customer } from '../views/Customer.jsx';


const mapStateToProps = state => {
  return {
    user: state.user,
    queue: state.queue,
    party: state.party,
    // socketInfoFromServer: state.socket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: () => { dispatch(setUserInfo()); },
    getQueueInfo: store => { dispatch(getQueueInfo(store)); },
    getPartyInfo: store => { dispatch(getPartyInfo(store)); },
    testSocketConnect: () => { dispatch(testSocketConnect()); },
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
    this.props.testSocketConnect();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);