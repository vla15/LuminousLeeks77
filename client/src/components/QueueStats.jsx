import React from 'react';
import { Row, Col } from 'react-bootstrap';


export const QueueStats = props => {
  return (
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
  );
};
