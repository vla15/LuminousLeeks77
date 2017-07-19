import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';
import { getUserInfo } from '../actions/queueActions.js';

import { Loading } from '../views/Loading.jsx';
import { Host } from '../views/Host.jsx';
import { Customer } from '../views/Customer.jsx';


const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: () => { dispatch(setUserInfo()) },
    getQueueInfo: store => { dispatch(getUserInfo(store)) }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
