import React from 'react';
import { Navbar, Row, Col, Button } from 'react-bootstrap';

export const EnqueueFormCustomer = props => {
  console.log('------EnqueueFormCustomer props', props)
  return (
    <Navbar className="enqueue-form-customer" fixedBottom={true}>
      <Row>
        <Col xs={2}>
          <Button
            onClick={() => {
              props.redux.dispatch.updatePartySize(props.redux.store.party.party_size - 1);
            }}
          >
            -
          </Button>
        </Col>
        <Col xs={2} className="center number">
          {props.redux.store.party.party_size}

        </Col>
        <Col xs={2}>
          <Button onClick={() => { props.redux.dispatch.updatePartySize(props.redux.store.party.party_size + 1); }}>
            +
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            block={true}
            onClick={() => {
              props.redux.dispatch.enqueueCustomer(
                props.redux.store.user.profile_id,
                props.redux.store.queueChoice.queue_view,
                props.redux.store.party.party_size,
                props.redux.store.user.first_name,
                props.redux.store.user.phone_number,
                props.redux.store.party.location.lat,
                props.redux.store.party.location.lng
              );
            }}
          >
            Enqueue
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};
