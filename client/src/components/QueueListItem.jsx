import React from 'react';

import { Row, Col } from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';
import moment from 'moment';

export const QueueListItem = props => {
  return (
    <Row>
      <Col xs={2}>
        <h6>
          {props.party.first_name}
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          {moment(moment.utc(props.party.wait_time) - moment())._i < 0 ? 0
            : moment.utc(props.party.wait_time).diff(moment(), 'minutes')} min(s)
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          {props.party.party_size}ppl
        </h6>
      </Col>
      <Col xs={4}>
        <h6>
          {props.party.phone_number}
        </h6>
      </Col>
      <Col xs={1}>
        <h6>
          <FontAwesome
            name="times"
            onClick={() => {
              props.redux.dispatch.dequeueHost(1, props.party.id);
            }}
          />
        </h6>
      </Col>
    </Row>
  );
};
