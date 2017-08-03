import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Row, Col, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export const ViewToggle = props => {
  return (
    <ButtonGroup className="view-toggle">

      { props.redux.store.view.hostView === 'Queue Info'
        ? <Button
          className="view-toggle-button"
          id='viewMap'
          value='Map'
          onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewMap').value); }}
        >
          <FontAwesome name="map-o" />
        </Button>
        :
        <Button
          className="view-toggle-button"
          id='viewQueueInfo'
          value='Queue Info'
          onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewQueueInfo').value); }}
        >
          <FontAwesome name="list-ul" />
        </Button>
      }

    </ButtonGroup>
  );
};

// <div>
//   <Row>
//     <Col xs={2} xsOffset={9}>
//       <Button
//         block={true}
//         id='viewMap'
//         value='Map'
//         onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewMap').value); }}
//       >
//       Map
//       </Button>
//     </Col>
//
//     <Col xs={2} xsOffset={9}>
//       <Button
//         block={true}
//         id='viewQueueInfo'
//         value='Queue Info'
//         onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewQueueInfo').value); }}
//       >
//       Queue Info
//       </Button>
//     </Col>
//
//   </Row>
// </div>
