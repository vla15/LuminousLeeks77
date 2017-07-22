import React from 'react';

import { QueueStats } from '../components/QueueStats.jsx';
import { QueueList } from '../components/QueueList.jsx';
import { EnqueueFormHost } from '../components/EnqueueFormHost.jsx';

import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueOpen = props => {
    return (
      <Grid>
        <QueueStats redux={props.redux}/>
        <QueueList redux={props.redux} />
        <EnqueueFormHost redux={props.redux} />
        <Navbar fixedBottom={true}>
          <Row>
            <Col xs={12}>
              <Button
                block={true}
                onClick={() => { console.log('Close Queue!'); }}
              >
                Close Queue
              </Button>
            </Col>
          </Row>
        </Navbar>
      </Grid>
    )
};
