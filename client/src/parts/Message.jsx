import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Message = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <h1>The queue is open.</h1>
      </Col>
    </Row>
  );
};
