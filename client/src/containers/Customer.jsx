import React from 'react';
import { connect } from 'react-redux';
import { test } from '../actions/testActions.js';

import { Header } from '../components/Header.jsx';
import { Message } from '../components/Message.jsx';
import { Info } from '../components/Info.jsx';
import { Footer } from '../components/Footer.jsx';

class Customer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Message />
        <Info />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: () => {
      dispatch(test());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
