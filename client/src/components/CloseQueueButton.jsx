import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const CloseQueueButton = props => {
  return (
    <Navbar fixedBottom={true}>
      <Row>
        <Col xs={12}>
          <Button
            block={true}
            onClick={() => { props.redux.dispatch.toggleQueue(props.redux.store.user.admin); }}
          >
            Close Queue
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};
