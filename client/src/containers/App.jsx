import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setUserInfo } from '../actions/userActions.js';

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
    setUserInfo: userInfo => { dispatch(setUserInfo(userInfo)) }
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
    axios.get('/userInfo')
    .then(result => { this.props.setUserInfo(result.data) })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
