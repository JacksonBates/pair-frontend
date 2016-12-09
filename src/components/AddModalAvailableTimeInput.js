import React from 'react';

const AddModalAvailableTimeInput = props => {
  return (
    <div>
      <label htmlFor='availableTime'>Length of Time Available for Pairing (example: 03:00 = 3hrs):</label>
      <div className='input-group'>
        <input required title="Please enter in the format HH:mm" className='form-control' name='availableTime' id='availableTime' type='text' pattern='\d{1,2}:\d{2}' aria-describedby="basic-addon2" value={props.availableTime} onChange={props.handleChange}/>
        <span className="input-group-addon" id="basic-addon2">HH:mm</span>
      </div>
    </div>
    );
};

export default AddModalAvailableTimeInput;