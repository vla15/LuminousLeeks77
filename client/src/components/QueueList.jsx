import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { EnqueueFormHost } from '../components/EnqueueFormHost.jsx';


export const QueueList = props => {
  return (
    <div className="queue-list">
      <Row className="queue-list-header">
        <Col xs={3}>
          <h6>
            Name
          </h6>
        </Col>
        <Col xs={2}>
          <h6>
            Wait
          </h6>
        </Col>
        <Col xs={2}>
          <h6>
            Size
          </h6>
        </Col>
        <Col xs={4}>
          <h6>
            Tele
          </h6>
        </Col>
      </Row>
      {props.redux.store.queue.parties.map(party => {
        return <QueueListItem key={party.id} party={party} redux={props.redux} />
      })}
    </div>
  );
};
