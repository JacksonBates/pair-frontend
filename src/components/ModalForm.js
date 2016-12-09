import React from 'react';
import AddModalUsernameInput from './AddModalUsernameInput';
import AddModalAvailableTimeInput from './AddModalAvailableTimeInput';
import AddModalTextInput from './AddModalTextInput';
import ModalSelectionList from './ModalSelectionList';

const ModalForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
        <AddModalUsernameInput username={props.username} handleChange={props.handleChange} />
        <AddModalAvailableTimeInput availableTime={props.availableTime} handleChange={props.handleChange} />
        <ModalSelectionList modalSelections={props.modalSelections}/>
        <AddModalTextInput name="setup" label="Other" value="" handleChange={props.handleChange} />
        <AddModalTextInput name="interests" label="Interests" value={props.interests} handleChange={props.handleChange} />
        <input className='btn btn-success modal-submit' type='submit' value='Submit' />
      </form>
    );
}

export default ModalForm;