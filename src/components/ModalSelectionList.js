import React from 'react';
import ModalSelection from './ModalSelection';

const ModalSelectionList = props => {
  const modalSelections = props.modalSelections.map(selection => <ModalSelection title={selection} handleChange={props.handleChange} />)
  return (
    <fieldset>
      <legend htmlFor="setup[]">Preferred Pairing Technology:</legend>
      {modalSelections}
    </fieldset>
    );
};

export default ModalSelectionList;