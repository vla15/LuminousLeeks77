import React from 'react';
import { Navbar, Row, Col, Button, Modal } from 'react-bootstrap';


export const EnqueueFormCustomer = props => {
  return (
    <Navbar className="enqueue-form-customer" fixedBottom={true}>
      <Modal
        bsSize="small"
        show={props.redux.store.view.modalState}
        onHide={ () => { props.redux.dispatch.toggleModal(props.redux.store.view.modalState); }}
        keyboard={true}
      >
        <Modal.Body bsClass="modal-body">
          <h3>You've been dequeued.</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button block={true} className="modal-body-btn neutral" onClick={() => { props.redux.dispatch.toggleModal(props.redux.store.view.modalState); }}>
              OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col xs={2}>
          <Button
            className="neutral"
            onClick={() => {
              props.redux.dispatch.updatePartySize(props.redux.store.party.party_size - 1);
            }}
          >
            -
          </Button>
        </Col>
        <Col xs={2} className="center number">
          {props.redux.store.party.party_size}

        </Col>
        <Col xs={2}>
          <Button
            className="neutral"
            onClick={() => {
              props.redux.dispatch.updatePartySize(props.redux.store.party.party_size + 1);
            }}
          >
            +
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            className="positive"
            block={true}
            onClick={() => {
              props.redux.dispatch.enqueueCustomer(
                props.redux.store.user.profile_id,
                props.redux.store.queueChoice.queue_view,
                props.redux.store.party.party_size,
                props.redux.store.user.first_name,
                props.redux.store.user.phone_number,
                props.redux.store.party.location.lat,
                props.redux.store.party.location.lng
              );
            }}
          >
            Enqueue
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};
