import React from 'react';
import { Row, Col } from 'react-bootstrap';


export const QueueStats = props => {
  return (
    <Row>
      <Col xs={4}>
        <h6>Queue Status</h6>
        <h3>
          { props.redux.store.queue.is_open
            ? 'Open'
            : 'Close'}
          </h3>
      </Col>
      <Col xs={4}>
        <h6>Queue Size</h6>
        <h3>{props.redux.store.queue.queue_size}</h3>
      </Col>
      <Col xs={4}>
        <h6>Next Wait Time</h6>
        <h3>{props.redux.store.queue.next_wait_time} min</h3>
      </Col>
    </Row>
  );
};


// <Navbar fixedTop={true}>
//   <Nav>
//     <Navbar.Brand>
//       <a href="#">Q</a>
//     </Navbar.Brand>
//     <Navbar.Text pullRight={true}>
//       { props.redux.store.user.admin
//       ? <ViewToggle redux={props.redux}/>
//       : <div></div>}
//       <a href="/profile">
//         Profile
//       </a>
//     </Navbar.Text>
//   </Nav>
// </Navbar>
