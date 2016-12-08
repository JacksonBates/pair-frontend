import React from 'react';
import Campers from './Campers';
import InfoModal from './InfoModal';
import AddModal from './AddModal';

const AppBody = props => {
  return (
    <div className='App-body'>
      <div className='container'>
        <div className='row'>
          {props.campers.map((camper, i) => <div key={i} className='col-xs-12 col-md-6'><Campers camper={camper} key={i} /></div>)}
        </div>
      </div>
      <AddModal showModal={props.showModal} onHide={props.close} handleSubmit={props.handleSubmit} handleChange={props.handleChange} username={props.username} availableTime={props.availableTime} interests={props.interests} />
      <InfoModal showInfo={props.showInfo} close={props.close}/>
    </div>
    );
}

export default AppBody;