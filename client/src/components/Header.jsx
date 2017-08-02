import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import { QueueStats } from '../components/QueueStats.jsx';
import { PartyStats } from '../components/PartyStats.jsx';
import { QueueChoiceStats } from '../components/QueueChoiceStats.jsx';

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
          <a href="/profile"><FontAwesome name="user-o" /></a>
        </Navbar.Text>
      </Navbar>
      { !props.redux.store.user.admin && props.redux.store.party.id
      ? <PartyStats redux={props.redux} />
      : !props.redux.store.user.admin && !props.redux.store.queueChoice.isEnqueued
      ? <QueueChoiceStats redux={props.redux} />
      : <QueueStats redux={props.redux} /> }
    </div>
  );
};
