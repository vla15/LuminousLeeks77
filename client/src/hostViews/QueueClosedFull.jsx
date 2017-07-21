import React from 'react';

import { QueueList } from '../components/QueueList.jsx';

import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueClosedFull = props => {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <h6>Queue Size</h6>
            <h1>{props.redux.store.queue.queue_size}</h1>
          </Col>
          <Col xs={6}>
            <h6>Next Wait Time</h6>
            <h1>{props.redux.store.queue.next_wait_time} min</h1>
          </Col>
        </Row>
        <QueueList redux={props.redux} />
        <Navbar fixedBottom={true}>
          <Row>
            <Col xs={12} className="center">
              The queue is closed.
            </Col>
          </Row>
        </Navbar>
      </Grid>
    )
};
