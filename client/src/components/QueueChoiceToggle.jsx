import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Row, Col, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export const QueueChoiceToggle = props => {
  return (
    <ButtonGroup className="view-toggle">

      { props.redux.store.view === 'Queue Info'
        ? <Button
          className="view-toggle-button"
          id='viewMap'
          value='Map'
          onClick={() => { props.redux.dispatch.setViewCustomer(document.getElementById('viewMap').value); }}
        >
          <FontAwesome name="map-o" />
        </Button>
        :
        <Button
          className="view-toggle-button"
          id='viewQueueInfo'
          value='Queue Info'
          onClick={() => { props.redux.dispatch.setViewCustomer(document.getElementById('viewQueueInfo').value); }}
        >
          <FontAwesome name="list-ul" />
        </Button>
      }

    </ButtonGroup>
  );
};
