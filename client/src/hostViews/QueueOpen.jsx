import React from 'react';

import { QueueList } from '../components/QueueList.jsx';

import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

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
        <QueueList redux={props.redux} />
        <Navbar fixedBottom={true}>
          <Row>
            <Col xs={12}>
              <Button
                block={true}
                onClick={() => { console.log('Close Queue!') }}
              >
                Close Queue
              </Button>
            </Col>
          </Row>
        </Navbar>
      </Grid>
    )
};
