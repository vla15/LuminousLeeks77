import React from 'react';

import { QueueClosed } from '../customerViews/QueueClosed.jsx';
import { QueueInfo } from '../customerViews/QueueInfo.jsx';
import { PartyInfo } from '../customerViews/PartyInfo.jsx';
import { EnqueueFormCustomer } from '../components/EnqueueFormCustomer.jsx';


import CustomerMap from '../components/CustomerMap.jsx';

class Customer extends React.Component {

  constructor(props) {
    super(props);
  }

  generateRandomLongitutde() {
    var max = -122.51000;
    var min = -122.38000;

    return (Math.random() * (max - min) + min).toFixed(6);
  }
  generateRandomLatitude() {
    var max = 37.80778;
    var min = 37.71000;

    return (Math.random() * (max - min) + min).toFixed(6);
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
    this.props.redux.dispatch.getPartyInfo(this.props.redux.store.queueChoice.isEnqueued, this.props.redux.store.user.profile_id);
    this.props.redux.dispatch.getQueueInfoCustomer(this.props.redux.store.queueChoice.isEnqueued);
    this.props.redux.dispatch.setPartyLocation();

    navigator.geolocation.watchPosition(position => {
      if (this.props.redux.store.party.id !== undefined) {
        this.props.redux.dispatch.updatePartyLocation( this.props.redux.store.party.id, position.coords.latitude, position.coords.longitude );
      }
    });
    setInterval(() => {
      // this.props.redux.dispatch.updatePartyLocation ( this.props.redux.store.party.id, Number(this.generateRandomLatitude()), Number(this.generateRandomLongitutde()))
      this.forceUpdate();
    }, 60000);
  }
}

export default Customer;
