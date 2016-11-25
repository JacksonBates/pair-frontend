import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class Campers extends Component {
  constructor(props){
    super(props);
    this.state = { end: new Date(this.props.camper.endTime).toTimeString()};
  }
  
  render() {
    return (
      <div className='user-card'>
        <img className='profile-images' src={'https://forum.freecodecamp.com/user_avatar/forum.freecodecamp.com/' + this.props.camper.username + '/120/202_1.png'} alt={this.props.camper.username + '\'s profile image'} />
        <br />
        <span className='user-card-name'><a href={'https://forum.freecodecamp.com/users/' + this.props.camper.username}>{this.props.camper.username}</a></span>
        <br />
        <span className='user-card-interests'>{this.props.camper.interests}</span>
        <br />
        <span className='user-card-setup'>{this.props.camper.setup}</span>
        <br />
        <span className='user-card-availability'>Available until: {this.state.end}</span>
        <form action={'https://enigmatic-dawn-95873.herokuapp.com/api/v1/' + this.props.camper._id} id={this.props.camper._id} method='post'>
          <input type='hidden' name='idToDelete' id='idToDelete' value={this.props.camper_id} />
          <Button type='submit' className='circle-button' bsStyle="danger" bsSize="small">
            <Glyphicon glyph='trash' />
          </Button>
        </form>
      </div>
    );
  }
}

export default Campers;
