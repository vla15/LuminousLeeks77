import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';
import { QueueOpen } from '../hostViews/QueueOpen.jsx';
import { QueueClosedEmpty } from '../hostViews/QueueClosedEmpty.jsx';
import { QueueClosedFull } from '../hostViews/QueueClosedFull.jsx';
import HostMap from '../components/HostMap.jsx';

class Host extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div>
          <Row>
            <Col xs={2} xsOffset={9}>
              <Button
                block={true}
                id='viewMap'
                value='Map'
                onClick={() => { this.props.redux.dispatch.setViewHost(document.getElementById('viewMap').value); }}
              >
              Map
              </Button>
            </Col>

            <Col xs={2} xsOffset={9}>
              <Button
                block={true}
                id='viewQueueInfo'
                value='Queue Info'
                onClick={() => { this.props.redux.dispatch.setViewHost(document.getElementById('viewQueueInfo').value); }}
              >
              Queue Info
              </Button>
            </Col>

          </Row>
        </div>

        { 
          this.props.redux.store.view.host === 'Queue Info'

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
