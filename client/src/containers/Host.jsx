import React from 'react';
import { connect } from 'react-redux';
import { test } from '../actions/testActions.js';

import { Header } from '../parts/Header.jsx';
import { Message } from '../parts/Message.jsx';
import { Info } from '../parts/Info.jsx';
import { Footer } from '../parts/Footer.jsx';

class Customer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <QueueSummary />
        <Queue />
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
