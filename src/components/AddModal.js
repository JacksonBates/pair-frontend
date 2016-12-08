import React from 'react';
import { Modal } from 'react-bootstrap';

const AddModal = props => {
  return (
    <Modal show={props.showModal} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add your details to the board</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit}>
            <label htmlFor='username'>Forum username:</label>
            <div className='input-group'>
              <span className="input-group-addon" id="basic-addon1">@</span>
              <input pattern=".{1,20}" required title="Username between 1 and 20 characters" className='form-control' name='username' id='username' type='text' aria-describedby="basic-addon1" value={props.username} onChange={props.handleChange}/>
            </div>
            <label htmlFor='availableTime'>Length of Time Available for Pairing (example: 03:00 = 3hrs):</label>
            <div className='input-group'>
              <input required title="Please enter in the format HH:mm" className='form-control' name='availableTime' id='availableTime' type='text' pattern='\d{1,2}:\d{2}' aria-describedby="basic-addon2" value={props.availableTime} onChange={props.handleChange}/>
              <span className="input-group-addon" id="basic-addon2">HH:mm</span>
            </div>

            <fieldset>
              <legend htmlFor="setup[]">Preferred Pairing Technology:</legend>
              <p>ScreenHero <input name="setup[]" type="checkbox" value="ScreenHero" onChange={props.handleChange}/></p>
              <p>TeamViewer <input name="setup[]" type="checkbox" value="TeamViewer" onChange={props.handleChange}/></p>
              <p>GoogleHangouts <input name="setup[]" type="checkbox" value="GoogleHangouts" onChange={props.handleChange}/></p>
              <p>Skype <input name="setup[]" type="checkbox" value="Skype" onChange={props.handleChange}/></p>
            </fieldset>

            Other: <input pattern=".{0}|.{1,30}" title="Keep it to minimum of 30 characters" className='form-control' name='setup' id='setup' type='text'/>
            <label htmlFor='interests'>Interests:</label>
            <input pattern=".{0}|.{1,30}" title="Keep it to minimum of 30 characters" className='form-control' name='interests' id='interests' type='text' value={props.interests} onChange={props.handleChange}/>
            <input className='btn btn-success modal-submit' type='submit' value='Submit' />
          </form>
        </Modal.Body>
      </Modal>
    );
}

export default AddModal;