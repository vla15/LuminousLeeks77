import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


export const QueueChoiceListItem = props => {
  return (
    <Row>
      <Col xs={2}>
        <h6>
          Queue Name
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
        </h6>
      </Col>
      <Col xs={2}>
        <h6>
        Queue Next Wait Time
        </h6>
      </Col>
      <Col xs={4}>
        <h6>
        Queue Size
        </h6>
      </Col>
      <Col xs={1}>
        <h6>
        JOIN
        </h6>
      </Col>
    </Row>
  );
};