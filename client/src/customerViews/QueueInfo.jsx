import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { EnqueueFormCustomer } from '../components/EnqueueFormCustomer.jsx';
import { QueueStats } from '../components/QueueStats.jsx';

export const QueueInfo = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>The queue is open.</h1>
        </Col>
      </Row>
      <QueueStats redux={props.redux} />
      <EnqueueFormCustomer redux={props.redux} />
    </Grid>
  );
};
