import React from 'react';
import { Modal } from 'react-bootstrap';

const AppModalHeader = props => {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    );
};

export default AppModalHeader;