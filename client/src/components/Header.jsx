import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, NavDropdown, MenuItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';
import FontAwesome from 'react-fontawesome';
import { QueueStats } from '../components/QueueStats.jsx';
import { PartyStats } from '../components/PartyStats.jsx';
import { QueueChoiceStats } from '../components/QueueChoiceStats.jsx';

export const Header = props => {
  let photoStyle = {
    width: '19',
    height: '19'
  };
  return (
    <div className="header">
      <Navbar>
        <Navbar.Text>
          { !props.redux.store.user.admin && props.redux.store.queueChoice.queue_view && !props.redux.store.party.id
            ? <div><FontAwesome name="chevron-left" onClick={() => { props.redux.dispatch.setQueueView(null, props.redux.store.user.profile_id); }} /></div>
            : <a id="brand" href="#">Q</a> }
        </Navbar.Text>
        <Navbar.Text pullRight={true}>
          { props.redux.store.user.admin
            ? <ViewToggle redux={props.redux}/>
            : <div></div>}
          <a href="/profile">
            { props.redux.store.user.photo
              ? <img src={props.redux.store.user.photo} style={photoStyle} className="img-circle"/>
              : <FontAwesome name="user-o"/> }
          </a>
        </Navbar.Text>
      </Navbar>
      { !props.redux.store.user.admin && props.redux.store.party.id
        ? <PartyStats redux={props.redux} />
        : !props.redux.store.user.admin && !props.redux.store.queueChoice.queue_view
          ? <QueueChoiceStats redux={props.redux} />
          : <QueueStats redux={props.redux} /> }
    </div>
  );
};