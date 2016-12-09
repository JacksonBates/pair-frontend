import React from 'react';

const ModalSelection = props => {
  return (
    <p>{props.title} <input name="setup[]" type="checkbox" value="{props.title}" onChange={props.handleChange}/></p>
    );
};

export default ModalSelection;