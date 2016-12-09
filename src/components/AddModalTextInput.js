import React from 'react';

const AddModalTextInput = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}:</label>
      <input pattern=".{0}|.{1,30}" title="Keep it to minimum of 30 characters" className='form-control' name={props.name} id={props.name} type='text' value={props.value} onChange={props.handleChange}/>
    </div>
    );
};

export default AddModalTextInput;