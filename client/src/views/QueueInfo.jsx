import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Message } from '../parts/Message.jsx';

export const QueueInfo = props => {
  return (
    <Grid>
      <Message />
      <Row>
        <Col xs={6}>
          <h6>Party Count</h6>
          <h1>4</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h6>Wait Duration</h6>
          <h1>20</h1>
        </Col>
        <Col xs={6}>
          <h6>Wait Time</h6>
          <h1>9:25pm</h1>
        </Col>
      </Row>
    </Grid>
  );
};
