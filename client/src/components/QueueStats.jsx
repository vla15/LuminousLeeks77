import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import { colors } from '../colors/colors.jsx';

export const QueueStats = props => {
  return (
    <Navbar className="queue-stats">
      <Navbar.Text>
        <h6>
          { props.redux.store.queue.name
          ? <span style={{ "color":colors(props.redux.store.queue.name), "vertical-align":"middle" }}> &#9724;</span>
          : <span></span> }
          &nbsp;&nbsp;
          {props.redux.store.queue.name}
          &nbsp;&nbsp;
          { props.redux.store.queue.is_open
            ? <FontAwesome name="check-circle" className="green" />
            : <FontAwesome name="plus-circle" className="red" />}
        </h6>
      </Navbar.Text>
      <Navbar.Text pullRight={true}>
        <h6>{
          moment.utc(props.redux.store.queue.next_wait_time).diff(moment(), 'minutes') < 10 ? 10
            : moment.utc(props.redux.store.queue.next_wait_time).diff(moment(), 'minutes') } m</h6>
      </Navbar.Text>
      <Navbar.Text pullRight={true}>
        <h6>{props.redux.store.queue.queue_size} parties</h6>
      </Navbar.Text>
    </Navbar>
  );
};
