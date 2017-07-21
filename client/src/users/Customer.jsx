import React from 'react';

import { QueueClosed } from '../customerViews/QueueClosed.jsx';
import QueueInfo from '../customerViews/QueueInfo.jsx';
import { PartyInfo } from '../customerViews/PartyInfo.jsx';

class Customer extends React.Component {
  render() {
    return (
      <div>
        { this.props.redux.store.queue === null
          ? <QueueClosed />
        : this.props.redux.store.party === null
        ? <QueueInfo redux={this.props.redux} />
        : <PartyInfo /> }
      </div>
    );
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueInfo();
  }
}

export default Customer;
