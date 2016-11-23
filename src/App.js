import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

// import logo from './logo.svg';
import './App.css';
import Campers from './Campers';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      campers: [],
      showModal: false 
    };

    this.close = () => {
      this.setState({ showModal: false });
    };

    this.open = () => {
      this.setState({ showModal: true });
    };
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
          <p><img className='fcc-logo' src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo_transparent.png" alt="The Free Code Camp remote pairing board" />
          <span className='header-text'>Remote Pairing Noticeboard</span></p>
          <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
          Add to board
        </Button>
        </div>
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>Hello</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action='https://enigmatic-dawn-95873.herokuapp.com/api/v1/add' method='post'>
                <label htmlFor='username'>Forum username</label>
                <input name='username' id='username' type='text' /><br />
                <label htmlFor='availableTime'>Available Time (HH:MM)</label>
                <input name='availableTime' id='availableTime' type='text' /><br />
                <label htmlFor='setup'>Preferred setup</label>
                <input name='setup' id='setup' type='text' /><br />
                <label htmlFor='interests'>Interests</label>
                <input name='interests' id='interests' type='text' /><br />
                <input className='btn btn-success' type='submit' value='Submit' />
              </form>
            </Modal.Body>
          </Modal>
          {this.state.campers.map((camper, i) => <Campers camper={camper} key={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
