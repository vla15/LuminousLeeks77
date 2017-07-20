import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export const QueueOpen = props => {
    return (
      <Grid>
        <Row>
          <Col xs={5}>
            <h6>Party Count</h6>
            <h1>4</h1>
          </Col>
          <Col xs={6}>
            <h6>Wait Duration</h6>
            <h1>20 min</h1>
          </Col>
        </Row>
      </Grid>
    )
};
