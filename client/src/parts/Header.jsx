import React from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

export const Header = (props) => {
  return (
    <Navbar fixedTop={true}>
      <Nav>
        <Navbar.Brand>
          <a href="#">Q</a>
        </Navbar.Brand>
        <Navbar.Text pullRight>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};
