import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { EnqueueFormCustomer } from '../components/EnqueueFormCustomer.jsx';
import { QueueStats } from '../components/QueueStats.jsx';

export const QueueInfo = props => {
  return (
    <Grid>
      <EnqueueFormCustomer redux={props.redux} />
      {/*<MapContainer />*/}
    </Grid>
  );
};
