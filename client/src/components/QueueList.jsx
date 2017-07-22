import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Grid, Row } from 'react-bootstrap';

export const QueueList = props => {
  return (
    <div>
      <QueueListItem redux={props.redux} partyId={1} />
      <QueueListItem redux={props.redux} partyId={2} />
      <QueueListItem redux={props.redux} partyId={3} />
      <QueueListItem redux={props.redux} partyId={4} />
      <QueueListItem redux={props.redux} partyId={5} />
    </div>
  );
};
