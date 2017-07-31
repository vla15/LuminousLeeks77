import React from 'react';

import { QueueStats } from '../components/QueueStats.jsx';
import { QueueList } from '../components/QueueList.jsx';
import { EnqueueFormHost } from '../components/EnqueueFormHost.jsx';
import { CloseQueueButton } from '../components/CloseQueueButton.jsx';

import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueOpen = props => {
  return (
    <Grid>
      <QueueList redux={props.redux} />
      <EnqueueFormHost redux={props.redux} />
      <CloseQueueButton redux={props.redux} />
    </Grid>
  );
};
