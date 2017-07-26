import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';
import moment from 'moment';

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
          <h1>
            {Math.max(moment(moment(props.redux.store.party.wait_time) - (new Date())).format('m'), 0)} min(s)
          </h1>
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
              onClick={() => { props.redux.dispatch.dequeue(1, props.redux.store.party.id); }}
            >
              Dequeue
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  );
};
