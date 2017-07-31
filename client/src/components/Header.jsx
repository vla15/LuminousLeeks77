import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';

export const Header = props => {
  return (
    <div className="header">
      <Navbar>
        <Navbar.Text>
          <a href="#">Q</a>
        </Navbar.Text>
        <Navbar.Text pullRight={true}>
          { props.redux.store.user.admin
            ? <ViewToggle redux={props.redux}/>
          : <div></div>}
          <a href="/profile">
            <FontAwesome name="user-o" />
          </a>
        </Navbar.Text>
      </Navbar>
      <Navbar className="queue-stats">
        <Navbar.Text>
          <h6>{props.redux.store.queue.is_open?'Open':'Closed'}</h6>
        </Navbar.Text>
        <Navbar.Text pullRight={true}>
          <h6>{props.redux.store.queue.next_wait_time} m</h6>
        </Navbar.Text>
        <Navbar.Text pullRight={true}>
          <h6>{props.redux.store.queue.queue_size} parties</h6>
        </Navbar.Text>
      </Navbar>
    </div>
  );
};


// <Grid className="queue-stats">
//   <div className="container">
//     <Row>
//       <Col xs={5} sm={5}>
//         <h6>
//           { props.redux.store.queue.is_open
//           ? 'Open'
//           : 'Closed'}
//         </h6>
//       </Col>
//       <Col className="right-align" xs={4} sm={4}>
//         <h6>{props.redux.store.queue.queue_size} parties</h6>
//       </Col>
//       <Col className="right-align" xs={3} sm={3}>
//         <h6>{props.redux.store.queue.next_wait_time} m</h6>
//       </Col>
//     </Row>
//   </div>
// </Grid>
