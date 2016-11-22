import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Campers from './Campers';

class App extends Component {

  constructor() {
    super();
    this.state = { campers: [] };
  }

  componentWillMount() {
    fetch('https://enigmatic-dawn-95873.herokuapp.com/api/v1/posts')
      .then(result => result.json())
      .then(result => this.setState( { campers : result }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FCC Remote Pairing Noticeboard</h2>
          <h3>{this.props.title}</h3>
        </div>
        <div>
          {this.state.campers.map((camper, i) => <Campers camper={camper} key={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
