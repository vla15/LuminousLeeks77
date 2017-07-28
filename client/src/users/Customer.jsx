import React from 'react';

import { QueueClosed } from '../customerViews/QueueClosed.jsx';
import { QueueInfo } from '../customerViews/QueueInfo.jsx';
import { PartyInfo } from '../customerViews/PartyInfo.jsx';
import { EnqueueFormCustomer } from '../components/EnqueueFormCustomer.jsx';


import CustomerMap from '../components/CustomerMap.jsx';

class Customer extends React.Component {

  constructor(props) {
    super(props);
    this.now = (60 - new Date().getSeconds());
  }

  render() {
    return (
      <div>
        { this.props.redux.store.queue.is_open === false
          ? <QueueClosed redux={this.props.redux} />
          : this.props.redux.store.party.id === undefined
            ? <QueueInfo redux={this.props.redux} />
            : <PartyInfo redux={this.props.redux}/> }
        <CustomerMap redux={this.props.redux} />
      </div>
    );
  }



  componentDidMount() {
    this.props.redux.dispatch.getPartyInfo(1, this.props.redux.store.user.profile_id);
    this.props.redux.dispatch.getQueueInfoCustomer(1);
    navigator.geolocation.getCurrentPosition(position => {
      this.props.redux.dispatch.updatePartyLocation( position.coords.latitude, position.coords.longitude );
    });
    navigator.geolocation.watchPosition(position => {
      if (this.props.redux.store.party.id !== undefined) {
        this.props.redux.dispatch.putPartyLocation( this.props.redux.store.party.id, position.coords.latitude, position.coords.longitude );
      }
    });
    setInterval(() => {
      console.log('counter');
      this.forceUpdate();
    }, 60000);
  }
}

export default Customer;
