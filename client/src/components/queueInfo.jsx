import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const QueueInfo = (props) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={6}>
          <h6>Party Count</h6>
          <div>4</div>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6}>
          <h6>Wait Duration</h6>
          <div>20</div>
        </Col>
        <Col xs={6}>
          <h6>Wait Time</h6>
          <div>9:25pm</div>
        </Col>
      </Row>
    </Grid>
  );
};
