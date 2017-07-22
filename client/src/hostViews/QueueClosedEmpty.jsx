import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueClosedEmpty = props => {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>
              The queue is closed.
            </h1>
          </Col>
        </Row>
        <Navbar fixedBottom={true}>
          <Row>
            <Col xs={12}>
              <Button
                block={true}
                onClick={() => { props.redux.dispatch.toggleQueue(1) }}
              >
                Open Queue
              </Button>
            </Col>
          </Row>
        </Navbar>
      </Grid>
    )
};
