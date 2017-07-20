import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';
import { getQueueInfo } from '../actions/queueActions.js';
import { getPartyInfo } from '../actions/partyActions.js';
import { testSocketConnect } from '../actions/testSocketActions.js';
import { incrementPartySize } from '../actions/newPartyActions.js';
import { decrementPartySize } from '../actions/newPartyActions.js';

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
    setUserInfo: () => { dispatch(setUserInfo()); },
    getQueueInfo: store => { dispatch(getQueueInfo(store)); },
    getPartyInfo: store => { dispatch(getPartyInfo(store)); },
    testSocketConnect: () => { dispatch(testSocketConnect()); },
    incrementPartySize: () => { dispatch(incrementPartySize()); },
    decrementPartySize: () => { dispatch(decrementPartySize()); }
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
    this.props.setUserInfo();
    this.props.testSocketConnect();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
