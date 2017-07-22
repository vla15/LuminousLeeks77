import React from 'react';

import { Row, Col } from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';


export const QueueListItem = props => {
  return (
    <Row>
      <Col xs={2}>
        <h6>
          Diana
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          4min
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          6ppl
        </h6>
      </Col>
      <Col xs={4}>
        <h6>
          5555555555
        </h6>
      </Col>
      <Col xs={1}>
        <h6>
          <FontAwesome
            name="times"
            onClick={() => { 
              props.redux.dispatch.dequeueParty(props.partyId); 
            }}
          />
        </h6>
      </Col>
    </Row>
  );
};
