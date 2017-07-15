import React from 'react';
import {connect} from 'react-redux';

import {test} from '../actions/testActions.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from React</h1>
        <button onClick={this.props.test}>Test</button>
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
