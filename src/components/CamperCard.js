import React, { Component } from 'react';
// import axios from 'axios';
import CamperPhoto from './CamperPhoto';
import CamperInfo from './CamperInfo';
// import server from '../config/config';

class Campers extends Component {
  constructor(props) {
    super(props);
    var date = new Date(this.props.camper.endTime).toTimeString();
    var setup = this.props.camper.setup;

    this.state = {
      end: (date.substr(0, 5) + ' ' + date.substr(9, date.length)),
      techSetup: Array.isArray(setup) ? setup.join(', ') : setup,
      id: this.props.camper_id,
      display: true
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const url = server + '/api/v1/posts/' + this.props.camper._id;
  //
  //   axios.delete(url).then(res => {
  //     if (res.status === 204) {
  //       // remove this from DOM without a refresh...
  //       this.setState({
  //         display: false
  //       });
  //     }
  //   }).catch(e => console.log(e))
  // }

  render() {
    if (this.state.display === false) {
      return null;
    } else {
      return (
        <div className='user-card'>
          <CamperPhoto username={this.props.camper.username} />
          <CamperInfo username={this.props.camper.username} interests={this.props.camper.interests}
            techSetup={this.state.techSetup} end={this.state.end} handleSubmit={this.handleSubmit}
            camper_id={this.props.camper._id} handleDelete={this.props.handleDelete}/>
        </div>
        );
    }
  }
}

export default Campers;
