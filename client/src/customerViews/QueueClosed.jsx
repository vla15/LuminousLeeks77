import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export const QueueClosed = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Button onClick={ () => { props.redux.dispatch.setQueueView(null); } }>
            Back
          </Button>
          <h1>
            The queue is closed.
          </h1>
        </Col>
      </Row>
    </Grid>
  );
};
