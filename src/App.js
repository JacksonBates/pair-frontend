import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Campers from './Campers';

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FCC Remote Pairing Noticeboard</h2>
          <h3>{this.props.title}</h3>
        </div>
        <div>
          {this.props.campers.map((camper, i) => <Campers camper={camper} key={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
