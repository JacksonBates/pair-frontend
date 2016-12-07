import React, { Component } from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import axios from 'axios';

import './App.css';
import Campers from './Campers';
import { withHash } from './History';

class App extends Component {

  constructor() {
    super();
    this.state = {
      campers: [],
      username: '',
      availableTime: '',
      setup: [],
      interests: ''
    };

    this.close = () => {
      this.props.replaceHash('');
      this.setState({
        username: '',
        availableTime: '',
        setup: [],
        interests: ''
      });
    };

    this.open = () => {
      this.props.replaceHash('#add');
    };

    this.openInfo = () => {
      this.props.replaceHash('#info');
    }

    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://enigmatic-dawn-95873.herokuapp.com/api/v1/posts')
      .then(result => result.json())
      .then(result => this.setState( { campers : result }))
      .catch(e => console.error(e));
  }

  handleChange(e) {
    // Get checked checkboxes
    if (e.target.name === 'setup[]') {
      const inputs = document.getElementsByName('setup[]')
      let setup = [];
      // TODO: refactor
      for (let i = 0, len = inputs.length; i < len; i++) {
        if (inputs[i].checked) setup.push(inputs[i].value)
      }
      this.setState({
        setup
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      username: this.state.username,
      availableTime: this.state.availableTime,
      setup: this.state.setup,
      interests: this.state.interests
    }
    const url = 'https://enigmatic-dawn-95873.herokuapp.com/api/v1/posts';

    axios.post(url, post).then(res => {
      if (res.status === 201) {
        // temporary solution, because API sends back nested data
        this.fetchData();
      }
    }).catch(e => console.log(e))
    this.close();
  }

  render() {
    let showModal = this.props.hash === '#add';
    let showInfo = this.props.hash === '#info';
    return (
      <div className="App">
        <div className="App-header">
          <p><span className='header-text pull-left'>freeCodeCamp<i className="fa fa-free-code-camp" aria-hidden="true"></i> Remote Pairing Noticeboard</span></p>
        </div>
        <div className='App-body'>
          <div className='container'>
            <div className='row'>
              {this.state.campers.map((camper, i) => <div key={i} className='col-xs-12 col-md-6'><Campers camper={camper} key={i} /></div>)}
            </div>
          </div>
          <Modal show={showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Add your details to the board</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Forum username:</label>
                <div className='input-group'>
                  <span className="input-group-addon" id="basic-addon1">@</span>
                  <input pattern=".{1,20}" required title="Username between 1 and 20 characters" className='form-control' name='username' id='username' type='text' aria-describedby="basic-addon1" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <label htmlFor='availableTime'>Length of Time Available for Pairing (example: 03:00 = 3hrs):</label>
                <div className='input-group'>
                  <input required title="Please enter in the format HH:mm" className='form-control' name='availableTime' id='availableTime' type='text' pattern='\d{1,2}:\d{2}' aria-describedby="basic-addon2" value={this.state.availableTime} onChange={this.handleChange}/>
                  <span className="input-group-addon" id="basic-addon2">HH:mm</span>
                </div>

                <fieldset>
                  <legend htmlFor="setup[]">Preferred Pairing Technology:</legend>
                  <p>ScreenHero <input name="setup[]" type="checkbox" value="ScreenHero" onChange={this.handleChange}/></p>
                  <p>TeamViewer <input name="setup[]" type="checkbox" value="TeamViewer" onChange={this.handleChange}/></p>
                  <p>GoogleHangouts <input name="setup[]" type="checkbox" value="GoogleHangouts" onChange={this.handleChange}/></p>
                  <p>Skype <input name="setup[]" type="checkbox" value="Skype" onChange={this.handleChange}/></p>
                </fieldset>

                Other: <input pattern=".{0}|.{1,30}" title="Keep it to minimum of 30 characters" className='form-control' name='setup' id='setup' type='text'/>
                <label htmlFor='interests'>Interests:</label>
                <input pattern=".{0}|.{1,30}" title="Keep it to minimum of 30 characters" className='form-control' name='interests' id='interests' type='text' value={this.state.interests} onChange={this.handleChange}/>
                <input className='btn btn-success modal-submit' type='submit' value='Submit' />
              </form>
            </Modal.Body>
          </Modal>
          <Modal show={showInfo} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>This pair noticeboard in intended only for use by FCC Forum participants - it doesn't work without a valid forum account.</p>
              <p>This was made in response to the week long <a href='https://forum.freecodecamp.com/t/computer-frontend-web-development-challenge-november-16-to-26/55986'>front end challenge</a> organised by @P1xt.</p>
              <h1>Technology used</h1>
              <p>The front end is built with <b>React</b>, in firm defiance of best practices, and uses an unholy mix of <b>react-bootstrap</b>, and regular <b>Bootstrap</b>.</p>
              <p>The back end is built with <b>NodeJS</b>, <b>Express</b> and <b>MongoDB</b>, with free, sandbox/hobby tier hosting from <b>Heroku</b> and <b>mLab</b>.</p>
              <h1>Repos</h1>
              <p>The front end repo is here: <a href='https://github.com/jacksonbates/pair-frontend'>Front end</a>.</p>
              <p>The back end repo is here: <a href='https://github.com/jacksonbates/pair-backend'>Back end</a>.</p>
              <p>Neither have been refactored or tidied, yet...</p>
              <h1>Notes</h1>
              <p>I suspect I am using React all wrong - especially with the way I am dealing with form submissions, forcing redirects an refreshes all over the place. Doesn't seem very Reacty to me...</p>
              <h1>Further Development</h1>
              <p>I am open to further development of this idea. Now that the project is finished in the eyes of the 'contest', I am open to working with any collaborators. PM me on the forum: <a href='https://forum.freecodecamp.com/users/jacksonbates'>JacksonBates</a></p>
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
App.propTypes = {
  hash: React.PropTypes.string.isRequired,
  replaceHash: React.PropTypes.func.isRequired,
}

export default withHash(App);
