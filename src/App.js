import React, { Component } from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

import './App.css';
import Campers from './Campers';          

class App extends Component {

  constructor() {
    super();
    this.state = { 
      campers: [],
      showModal: false,
      showInfo: false 
    };

    this.close = () => {
      this.setState({ showModal: false, showInfo: false});
    };

    this.open = () => {
      this.setState({ showModal: true });
    };

    this.openInfo = () => {
      this.setState({ showInfo: true });
    }
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
          <p><span className='header-text pull-left'>freeCodeCamp<i className="fa fa-free-code-camp" aria-hidden="true"></i> Remote Pairing Noticeboard</span></p>
        </div>
        <div className='App-body'>
          <div className='container'>
            <div className='row'>
              {this.state.campers.map((camper, i) => <div key={i} className='col-xs-6 col-md-4 col-lg-3'><Campers camper={camper} key={i} /></div>)}
            </div>
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>Add your details to the board</Modal.Title>
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
          <Modal show={this.state.showInfo} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Info about the app...
            </Modal.Body>
          </Modal>
        </div>
        <div className='App-footer'>
          <Button className='add-button' bsSize="small" onClick={this.open}>
            <Glyphicon glyph='plus' /> Add
          </Button>
          <Button className='info-button' bsSize="small" onClick={this.openInfo}>
            <Glyphicon glyph='info-sign' /> Info
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
