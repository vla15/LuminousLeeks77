import React from 'react';

import { EmptyComp } from '../components/EmptyComp.jsx';

import { Navbar } from 'react-bootstrap';
import { EnqueueForm } from 'react-bootstrap';

export const Footer = props => {
  return (
    <Navbar fixedBottom={true}>
      { props.store.queue === null
      ? <EmptyComp/>
      : props.store.party === null
      ? <DequeueForm />
      : <EnqueueForm /> }
    </Navbar>
  );
};
