import React from 'react';
import CamperList from './CamperList';
import InfoModal from './InfoModal';
import AddModal from './AddModal';

const AppBody = props => {
  return (
    <div className='App-body'>
      <CamperList campers={props.campers} handleDelete={props.handleDelete}/>
      <AddModal
        showModal={props.showModal}
        onHide={props.close}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        username={props.username}
        availableTime={props.availableTime}
        interests={props.interests}
        modalSelections={props.modalSelections}
     />
      <InfoModal showInfo={props.showInfo} close={props.close}/>
    </div>
    );
}

export default AppBody;
