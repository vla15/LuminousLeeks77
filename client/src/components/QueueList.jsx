import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Grid, Row, Table, thead, tr, th, tbody } from 'react-bootstrap';

export const QueueList = props => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Wait</th>
          <th>Party</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.redux.store.queue.parties.map(party => {
          return <QueueListItem key={party.id} party={party} redux={props.redux} />
        })}
      </tbody>
    </Table>
  );
};
