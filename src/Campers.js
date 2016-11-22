import React, { Component } from 'react';

class Campers extends Component {
  render() {
    return (
      <div>
        <img src={'https://forum.freecodecamp.com/user_avatar/forum.freecodecamp.com/' + this.props.camper.username + '/120/202_1.png'} alt={this.props.camper.username + '\'s profile image'} />
        <p><b><a href={'https://forum.freecodecamp.com/users/' + this.props.camper.username}>{this.props.camper.username}</a></b></p>
        <p><i>{this.props.camper.interests}</i></p>
        <p>{this.props.camper.setup}</p>
      </div>
    );
  }
}

export default Campers;
