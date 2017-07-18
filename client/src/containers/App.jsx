import React from 'react';
import { connect } from 'react-redux';
import { test } from '../actions/testActions.js';

import { Navigation } from '../components/Navigation.jsx';
import { Message } from '../components/Message.jsx';
import { QueueInfo } from '../components/QueueInfo.jsx';
import { EnqueueForm } from '../components/EnqueueForm.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Message/>
        <QueueInfo/>
        <EnqueueForm/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
