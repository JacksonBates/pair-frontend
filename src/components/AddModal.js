import React from 'react';
import { Modal } from 'react-bootstrap';
import AppModalHeader from './AppModalHeader';
import ModalForm from './ModalForm';

const AddModal = props => {
  return (
    <Modal show={props.showModal} onHide={props.onHide}>
      <AppModalHeader title="Add your details to the board" />
      <Modal.Body>
        <ModalForm handleSubmit={props.handleSubmit} handleChange={props.handleChange} availableTime={props.availableTime} username={props.username} interests={props.interests} modalSelections={props.modalSelections}/>
        </Modal.Body>
      </Modal>
    );
}

export default AddModal;