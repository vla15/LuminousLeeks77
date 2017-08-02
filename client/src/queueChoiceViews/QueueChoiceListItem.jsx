import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

export const QueueChoiceListItem = props => {
  return (
    <Row onClick={ () => { props.redux.dispatch.setQueueView(props.queue.id, props.redux.store.user.profile_id); }}>
      <Col xs={4}>
        <h6>
          {props.queue.name}
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          {
            moment.utc(props.queue.next_wait_time).diff(moment(), 'minutes') < 10 ? 10
              : moment.utc(props.queue.next_wait_time).diff(moment(), 'minutes')
          } m
        </h6>
      </Col>
      <Col xs={3}>
        <h6>
          {props.queue.queue_size} parties
        </h6>
      </Col>
      <Col xs={2}>
        <h6 className="text-center">
          { props.queue.is_open
            ? <FontAwesome name="check-circle" className="green" />
            : <FontAwesome name="plus-circle" className="red" />}
        </h6>
      </Col>
    </Row>
  );
};
