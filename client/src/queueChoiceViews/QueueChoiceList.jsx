import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { QueueChoiceListItem } from './QueueChoiceListItem.jsx';

export const QueueChoiceList = props => {
  console.log('choice list renderes?');
  return (
    <div>
      <QueueChoiceListItem redux={props.redux}/>
    </div>
  );
};