import React, { Component } from 'react';

class Campers extends Component {
  render() {
    return (
      <li>{this.props.camper.name}</li>
    );
  }
}

export default Campers;
