import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

import { EnqueueForm } from '../components/EnqueueForm.jsx';

export const PartyInfo = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>You are 6th on the queue.</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h6>Parties Ahead</h6>
          <h1>5</h1>
        </Col>
        <Col xs={5}>
          <h6>Parties Behind</h6>
          <h1>9</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h6>Wait Duration</h6>
          <h1>20</h1>
        </Col>
        <Col xs={5}>
          <h6>Wait Time</h6>
          <h1>9:25pm</h1>
        </Col>
      </Row>
      <Navbar fixedBottom={true}>
        <Row>
          <Col xs={12}>
            <Button
              block={true}
              onClick={() => { console.log('Dequeue!') }}
            >
              Dequeue
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  );
};
