import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const CamperDeleteButton = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='hidden' name='idToDelete' id='idToDelete' value={props.camper_id} />
      <Button type='submit' className='circle-button' bsStyle="danger" bsSize="small">
        Delete Post <Glyphicon glyph='trash' />
      </Button>
    </form>
    );
};

export default CamperDeleteButton;