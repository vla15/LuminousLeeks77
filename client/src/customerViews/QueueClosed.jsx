import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const QueueClosed = props => {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>
              The queue is closed.
            </h1>
          </Col>
        </Row>
      </Grid>
    )
};
