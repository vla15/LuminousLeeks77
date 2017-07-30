import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

export const QueueStats = props => {
  return (
    <Row>
      <Col xs={4}>
        <h6>Queue Size</h6>
        <h1>{props.redux.store.queue.queue_size}</h1>
      </Col>
      <Col xs={6}>
        <h6>Next Wait Time</h6>
        <h1>
          {
            moment.utc(props.redux.store.queue.next_wait_time).diff(moment(), 'minutes') < 10 ? 10
              : moment.utc(props.redux.store.queue.next_wait_time).diff(moment(), 'minutes') } min(s)
        </h1>
      </Col>
    </Row>
  );
};
