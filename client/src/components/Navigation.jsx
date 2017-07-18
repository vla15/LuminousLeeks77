import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Navigation = (props) => {
  return (
    <Navbar fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Q</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};
