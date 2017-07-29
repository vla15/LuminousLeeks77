import React from 'react';

import { QueueStats } from '../components/QueueStats.jsx';
import { QueueList } from '../components/QueueList.jsx';
import { EnqueueFormHost } from '../components/EnqueueFormHost.jsx';

import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueOpen = props => {
  return (
    <Grid>

      <Row>
        <Col xs={2} xsOffset={9}>
          <Button
            block={true}
            id='viewMap'
            value='Map'
            onClick={() => { props.redux.dispatch.setViewHost('Map'); }}
          >
            Map
          </Button>
        </Col>

        <Col xs={2} xsOffset={9}>
          <Button
            block={true}
            id='viewQueueInfo'
            value='Queue Info'
            onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewQueueInfo').value); }}
          >
            Queue Info
          </Button>
        </Col>

      </Row>


      <QueueStats redux={props.redux}/>
      <QueueList redux={props.redux} />
      <EnqueueFormHost redux={props.redux} />
      <Navbar fixedBottom={true}>
        <Row>
          <Col xs={12}>
            <Button
              block={true}
              onClick={() => { props.redux.dispatch.toggleQueue(1); }}
            >
              Close Queue
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  );
};





