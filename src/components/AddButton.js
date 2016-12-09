import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const AddButton = props => {
  return (
    <Button className='add-button' bsSize="small" onClick={props.open}>
      <Glyphicon glyph='plus' /> Add
    </Button>
    );
};

export default AddButton;