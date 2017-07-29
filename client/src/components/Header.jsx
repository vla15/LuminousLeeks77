import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { ViewToggle } from '../components/ViewToggle.jsx';

export const Header = props => {
  return (
    <Navbar fixedTop={true}>
      <Nav>
        <Navbar.Brand>
          <a href="#">Q</a>
        </Navbar.Brand>
        <Navbar.Text pullRight={true}>
          { props.redux.store.user.admin
          ? <ViewToggle redux={props.redux}/>
          : <div></div>}
          <a href="/profile">
            Profile
          </a>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};
