import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx'
import { Grid, Row } from 'react-bootstrap';

export const QueueList = props => {
  return (
    <div>
      <QueueListItem />
      <QueueListItem />
      <QueueListItem />
      <QueueListItem />
      <QueueListItem />
    </div>
  );
};
