import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const InfoButton = props => {
  return (
    <Button className='info-button' bsSize="small" onClick={props.openInfo}>
      <Glyphicon glyph='info-sign' /> Info
    </Button>
    );
};

export default InfoButton;