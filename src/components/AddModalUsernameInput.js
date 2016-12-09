import React from 'react';

const AddModalUsernameInput = props => {
  return (
    <div>
      <label htmlFor='username'>Forum username:</label>
      <div className='input-group'>
        <span className="input-group-addon" id="basic-addon1">@</span>
        <input pattern=".{1,20}" required title="Username between 1 and 20 characters" className='form-control' name='username' id='username' type='text' aria-describedby="basic-addon1" value={props.username} onChange={props.handleChange}/>
      </div>
    </div>
    );
};

export default AddModalUsernameInput;