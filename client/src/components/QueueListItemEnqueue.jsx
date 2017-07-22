import React from 'react';

import { Row, Col } from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';


export const QueueListItemEnqueue = props => {
  console.log()
  return (
    <Row>
      <Col xs={2}>
        <h6>
          Monkey
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          <select
            id="partySize"
            name="partySize"
            value={props.redux.store.newParty.partySize}
            onChange={() => { props.redux.changePartySize(document.getElementById("partySize").value) }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          4min
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
