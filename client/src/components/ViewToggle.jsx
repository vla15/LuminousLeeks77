import React from 'react';

import { QueueListItem } from '../components/QueueListItem.jsx';
import { Row, Col, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export const ViewToggle = props => {
  return (
      <ButtonGroup className="viewToggle">

        { props.redux.store.view === 'Queue Info'
          ? <Button
              className="viewToggleButton"
              id='viewMap'
              value='Map'
              onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewMap').value); }}
              >
              Map
            </Button>
          :
          <Button
            className="viewToggleButton"
            id='viewQueueInfo'
            value='Queue Info'
            onClick={() => { props.redux.dispatch.setViewHost(document.getElementById('viewQueueInfo').value); }}
            >
            List
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
