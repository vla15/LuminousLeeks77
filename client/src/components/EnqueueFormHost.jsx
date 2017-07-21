import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export const EnqueueFormHost = props => {
  return (
    <Row>
      <Col xs={2}>
        <h6>
          <input
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={props.redux.store.newParty.firstName}
            onChange={() => {
              props.redux.dispatch.changeFirstName(document.getElementById("firstName").value)
            }}
          >
          </input>
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
          <select
            id="partySize"
            name="partySize"
            value={props.redux.store.newParty.partySize}
            onChange={() => {props.redux.dispatch.changePartySize(document.getElementById("partySize").value);
            }}
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

      <Col xs={4}>
        <h6>
          <input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone number"
            value={props.redux.store.newParty.phoneNumber}
            onChange={() => {
              props.redux.dispatch.changePhoneNumber(document.getElementById("phoneNumber").value);
            }}
          >
          </input>
        </h6>
      </Col>
      <Col xs={1}>
        <h6>
          <FontAwesome
            name="plus"
            onClick={() => {console.log('Enqueue!'); }}
          />
        </h6>
      </Col>
    </Row>
  );
};
