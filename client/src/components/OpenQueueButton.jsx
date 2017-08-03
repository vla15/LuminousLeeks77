import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const OpenQueueButton = props => {
  return (
    <Navbar fixedBottom={true}>
      <Row>
        <Col xs={12} className="center">
          <Button
            className="positive"
            block={true}
            onClick={() => { props.redux.dispatch.toggleQueue(1); }}
          >
            Open Queue
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};
