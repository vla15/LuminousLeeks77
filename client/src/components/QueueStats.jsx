import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

export const QueueStats = props => {
  return (
    <Navbar className="queue-stats">
      <Navbar.Text>
        <h6>
          {props.redux.store.queue.is_open?'Open':'Closed'}
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
