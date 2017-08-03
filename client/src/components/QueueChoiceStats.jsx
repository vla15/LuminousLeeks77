import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

export const QueueChoiceStats = props => {
  return (
    <Navbar className="party-stats">
      <Navbar.Text>
        <h6>
          San Francisco
        </h6>
      </Navbar.Text>

      <Navbar.Text pullRight={true}>
        <h6>{props.redux.store.queueChoice.queueList.length} queues</h6>
      </Navbar.Text>
    </Navbar>
  );
};
