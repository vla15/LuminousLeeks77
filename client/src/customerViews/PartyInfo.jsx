import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';
import Moment from 'moment';

export const PartyInfo = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>You are number {props.redux.store.party.parties_ahead + 1} on the queue.</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h6>Parties Ahead</h6>
          <h1>{props.redux.store.party.parties_ahead}</h1>
        </Col>
        <Col xs={5}>
          <h6>Wait Time</h6>
          <h1>10 mins</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h6>Parties Behind</h6>
          <h1>{props.redux.store.party.parties_behind}</h1>
        </Col>
      </Row>
      <Navbar fixedBottom={true}>
        <Row>
          <Col xs={12}>
            <Button
              block={true}
              onClick={() => { props.redux.dispatch.dequeueCustomer(1, props.redux.store.party.id); }}
            >
              Dequeue
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  );
};
