import React from 'react';
import { Navbar, Row, Col, Button } from 'react-bootstrap';

export const EnqueueFormCustomer = props => {
  return (
        <Navbar fixedBottom={true}>
          <Row>
            <Col xs={12} className="center">
              <h6>Party size</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <Button
                onClick={() => {
                  props.redux.dispatch.updatePartySize(props.redux.store.party.party_size - 1)
                }}
              >
                -
              </Button>
            </Col>
            <Col xs={8} className="center number">
              {props.redux.store.party.party_size}
            </Col>
            <Col xs={2}>
              <Button
                onClick={() => {
                  props.redux.dispatch.updatePartySize(props.redux.store.party.party_size + 1)
                }}
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button
                block={true}
                onClick={() => {
                  props.redux.dispatch.enqueue(
                    props.redux.store.user.profile_id,
                    1,
                    props.redux.store.party.party_size,
                    props.redux.store.user.first_name,
                    props.redux.store.user.phone_number
                  )
                }}
              >
                Enqueue
              </Button>
            </Col>
          </Row>
        </Navbar>
  );
};
