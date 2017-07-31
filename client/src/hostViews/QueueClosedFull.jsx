import React from 'react';

import { QueueList } from '../components/QueueList.jsx';
import { OpenQueueButton } from '../components/OpenQueueButton.jsx';

import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueClosedFull = props => {
  return (
    <Grid>
      <QueueList redux={props.redux} />
      <OpenQueueButton redux ={props.redux} />
    </Grid>
  );
};
