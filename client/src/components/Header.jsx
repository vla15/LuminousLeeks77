import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import { QueueStats } from '../components/QueueStats.jsx';
import { PartyStats } from '../components/PartyStats.jsx';

export const Header = props => {
  let photoSyle = {
    width: '45',
    height: '45'
  };
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
            <img src={props.redux.store.user.photo} style={photoSyle} className='img-circle'/>
          </a>
        </Navbar.Text>
      </Navbar>
      { !props.redux.store.user.admin && props.redux.store.party.id
        ? <PartyStats redux={props.redux} />
        : <QueueStats redux={props.redux} /> }
    </div>
  );
};