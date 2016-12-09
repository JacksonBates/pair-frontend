import React, { Component } from 'react';
import axios from 'axios';

// Components
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';

import './App.css';
import { withHash } from './History';
import server from './config/config';

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
    fetch(`${server}/api/v1/posts`)
      .then(result => result.json())
      .then(result => this.setState({
        campers: result
      }))
      .catch(e => console.error(e));
  }

  handleChange(e) {
    // Get checked checkboxes
    if (e.target.name === 'setup[]') {
      const inputs = document.getElementsByName('setup[]')
      let setup = [];
      // TODO: refactor
      for (let i = 0, len = inputs.length; i < len; i++) {
        if (inputs[i].checked) {
          setup.push(inputs[i].value)
        }
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
    const url = `${server}/api/v1/posts`;

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
    const pairingTechs = ["ScreenHero", "TeamViewer", "GoogleHangouts", "Skype"];
    return (
      <div className="App">
        <AppHeader headerText="freeCodeCamp" appName="Remote Pairing Noticeboard" />
        <AppBody campers={this.state.campers} showModal={showModal} onHide={this.close} handleSubmit={this.handleSubmit} handleChange={this.handleChange} username={this.state.username} availableTime={this.state.availableTime} interests={this.state.interests} showInfo={showInfo} openInfo={this.openInfo} close={this.close} open={this.open} modalSelections={pairingTechs}/>
        <AppFooter open={this.open} openInfo={this.openInfo} />
      </div>
      );
  }
}
App.propTypes = {
  hash: React.PropTypes.string.isRequired,
  replaceHash: React.PropTypes.func.isRequired,
}

export default withHash(App);
