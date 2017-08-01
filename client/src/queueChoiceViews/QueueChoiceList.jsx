import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { QueueChoiceListItem } from './QueueChoiceListItem.jsx';

export const QueueChoiceList = props => {
  return (
    <div>
      {props.redux.store.queueChoice.queueList.map(queue => {
        return <QueueChoiceListItem queue={queue} redux={props.redux} key={queue.id} />;
      })}
    </div>
  );
};