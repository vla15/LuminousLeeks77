import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

export const QueueChoiceListItem = props => {
  return (
    <Row>
      <Col xs={2}>
        <h5>
          Queue Id
          {props.queue.id}
        </h5>
      </Col>
      <Col xs={2}>
        <h5>
        Next Wait Time
          {
            moment.utc(props.queue.next_wait_time).diff(moment(), 'minutes') < 10 ? 10
              : moment.utc(props.queue.next_wait_time).diff(moment(), 'minutes')
          } min(s)
        </h5>
      </Col>
      <Col xs={4}>
        <h5>
          Queue Size
          {props.queue.queue_size}
        </h5>
      </Col>
      <Col xs={2}>
        <h5>
          {props.queue.is_open ? 'OPEN' : 'CLOSED'}
        </h5>
      </Col>
      <Col xs={1}>
        <h5>
          <Button
            block={true}
            onClick={() => {
              props.redux.dispatch.setQueueView(props.queue.id, props.redux.store.user.profile_id);
            }}
          >
            View
          </Button>
        </h5>
      </Col>
    </Row>
  );
};