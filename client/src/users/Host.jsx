import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';
import { QueueOpen } from '../hostViews/QueueOpen.jsx';
import { QueueClosedEmpty } from '../hostViews/QueueClosedEmpty.jsx';
import { QueueClosedFull } from '../hostViews/QueueClosedFull.jsx';
import { ViewToggle } from '../components/ViewToggle.jsx';
import HostMap from '../components/HostMap.jsx';
import { Header } from '../components/Header.jsx';

class Host extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header redux={this.props.redux} />
        {
          this.props.redux.store.view === 'Queue Info'
            ? (this.props.redux.store.queue.is_open === true
              ? <QueueOpen redux={this.props.redux} />
              : this.props.redux.store.queue.parties.length === 0
                ? <QueueClosedEmpty redux={this.props.redux} />
                : <QueueClosedFull redux={this.props.redux} />)
            : <HostMap redux={this.props.redux} />
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.redux.dispatch.getQueueInfoHost(this.props.redux.store.user.admin);
    setInterval(() => {
      this.forceUpdate();
    }, 60000);
  }
}

export default Host;
