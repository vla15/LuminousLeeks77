import React from 'react';

import { QueueOpen } from '../hostViews/QueueOpen.jsx';
import { QueueClosedEmpty } from '../hostViews/QueueClosedEmpty.jsx';
import { QueueClosedFull } from '../hostViews/QueueClosedFull.jsx';

class Host extends React.Component {

  constructor(props) {
    super(props);
    this.now = (60 - new Date().getSeconds());
  }

  render() {
    return (
      <div>
        { this.props.redux.store.queue.is_open === true
          ? <QueueOpen redux={this.props.redux} />
          : this.props.redux.store.queue.parties.length === 0
            ? <QueueClosedEmpty redux={this.props.redux} />
            : <QueueClosedFull redux={this.props.redux} />}
      </div>
    );
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueInfoHost(1);
    setInterval(() => {
      this.forceUpdate();
    }, 60000);
  }
}

export default Host;