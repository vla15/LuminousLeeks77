import React from 'react';
import { Navbar, Row, Col, Button } from 'react-bootstrap';

export const EnqueueForm = props => {
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
                onClick={() => { props.redux.changePartySize(props.redux.store.newParty.partySize - 1) }}
              >
                -
              </Button>
            </Col>
            <Col xs={8} className="center number">
              {props.redux.store.newParty.partySize}
            </Col>
            <Col xs={2}>
              <Button
                onClick={() => { props.redux.changePartySize(props.redux.store.newParty.partySize + 1) }}
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button
                block={true}
              >
                Enqueue
              </Button>
            </Col>
          </Row>
        </Navbar>
  );
};
