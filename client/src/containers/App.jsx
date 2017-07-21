import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';
import { getQueueInfo } from '../actions/queueActions.js';
import { getPartyInfo } from '../actions/partyActions.js';
import { testSocketConnect } from '../actions/testSocketActions.js';

import {
  changePartySize,
  changeFirstName,
  changePhoneNumber
} from '../actions/newPartyActions.js';

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
    dispatch: {
      setUserInfo: () => { dispatch(setUserInfo()); },
      getQueueInfo: () => { dispatch(getQueueInfo()); },
      getPartyInfo: () => { dispatch(getPartyInfo()); },
      testSocketConnect: () => { dispatch(testSocketConnect()); },
      changePartySize: partySize => { dispatch(changePartySize(partySize)); },
      changeFirstName: firstName => { dispatch(changeFirstName(firstName)); },
      changePhoneNumber: phoneNumber => { dispatch(changePhoneNumber(phoneNumber)); }
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
    this.props.dispatch.getQueueInfo();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
