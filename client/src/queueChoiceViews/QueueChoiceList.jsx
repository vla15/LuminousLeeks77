import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { QueueChoiceListItem } from './QueueChoiceListItem.jsx';

export const QueueChoiceList = props => {
  return (
    <Grid className="queue-list-container">
      <div className="queue-list">
        <Row className="queue-list-header">
          <Col xs={4}>
            <h6>
              Name
            </h6>
          </Col>
          <Col xs={2}>
            <h6>
              Wait
            </h6>
          </Col>
          <Col xs={3}>
            <h6>
              Size
            </h6>
          </Col>
          <Col xs={2}>
            <h6>
              Status
            </h6>
          </Col>
        </Row>
        {props.redux.store.queueChoice.queueList.map(queue => {
          return <QueueChoiceListItem queue={queue} redux={props.redux} key={queue.id} />;
        })}
      </div>
    </Grid>
  );
};
