import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class CamperDeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.handleDelete(this.props.camper_id);
  }

  render() {
    return (
      <form onSubmit={this.handleDelete}>
        <input type='hidden' name='idToDelete' id='idToDelete' value={this.props.camper_id} />
        <Button type='submit' className='circle-button' bsStyle="danger" bsSize="small">
          Delete Post <Glyphicon glyph='trash' />
        </Button>
      </form>
      );
  }
};

export default CamperDeleteButton;
