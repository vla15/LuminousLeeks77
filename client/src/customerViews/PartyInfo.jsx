import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';
import moment from 'moment';

export const PartyInfo = props => {
  return (
    <Grid>
      <Navbar fixedBottom={true}>
        <Row>
          <Col xs={12}>
            <Button
              className="neutral"
              block={true}
              onClick={() => { props.redux.dispatch.dequeueCustomer(props.redux.store.queueChoice.queue_view, props.redux.store.party.id, props.redux.store.user.profile_id); }}
            >
              Dequeue
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  );
};
