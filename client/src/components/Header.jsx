import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const Header = props => {
  return (
    <Navbar fixedTop={true}>
      <Nav>
        <Navbar.Brand>
          <a href="#">Q</a>
        </Navbar.Brand>
        <Navbar.Text pullRight={true}>
          <a href="/profile">            
            { props.redux.store.user
              ? props.redux.store.user.first_name
              : ''}
          </a>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};
