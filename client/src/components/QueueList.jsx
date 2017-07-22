import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Grid, Row } from 'react-bootstrap';

export const QueueList = props => {
  return (
    <div>
      {props.redux.store.queue.parties.map(party => {
        return <QueueListItem party={party} />
      })}
    </div>
  );
};
