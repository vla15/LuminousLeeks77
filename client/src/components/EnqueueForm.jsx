import React from 'react';
import { Navbar, Row, Col, Button } from 'react-bootstrap';

export const EnqueueForm = (props) => {
  return (
      <Navbar fixedBottom={true}>
        <Row>
          <Col xs={12} className="center">
            <h6>Party size</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button>-</Button>
          </Col>
          <Col xs={8} className="center">
            <div className="number">1</div>
          </Col>
          <Col xs={2}>
            <Button>+</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button
              block={true}
              onClick={() => { console.log('Enqueue!') }}
            >
              Enqueue
            </Button>
          </Col>
        </Row>
      </Navbar>
  );
};
