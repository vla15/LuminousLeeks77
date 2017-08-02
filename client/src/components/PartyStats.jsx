import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import { colors } from '../colors/colors.jsx';


export const PartyStats = props => {
  return (
    <Navbar className="party-stats">
      <Navbar.Text>
        <h6>{props.redux.store.queue.name}&nbsp;&nbsp;<FontAwesome name="circle" className="green blink" /></h6>
      </Navbar.Text>
      <Navbar.Text pullRight={true}>
        <h6>{moment(moment.utc(props.redux.store.party.wait_time) - moment())._i < 0 ? 0
          : moment.utc(props.redux.store.party.wait_time).diff(moment(), 'minutes')} m</h6>
      </Navbar.Text>
      <Navbar.Text pullRight={true}>
        <h6>{props.redux.store.party.parties_behind} behind</h6>
      </Navbar.Text>
      <Navbar.Text pullRight={true}>
        <h6>{props.redux.store.party.parties_ahead} ahead</h6>
      </Navbar.Text>
    </Navbar>
  );
};
