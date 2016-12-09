import React from 'react';
import CamperDeleteButton from './CamperDeleteButton';

const CamperInfo = props => {
  return (
    <div className='user-card-info'>
      <p className='user-card-name'><a href={'https://forum.freecodecamp.com/users/' + props.username}>{props.username}</a></p>
      <p className='user-card-interests'>{props.interests}</p>
      <p className='user-card-setup'><b>Preferred Pairing Technology(s):</b> {props.techSetup}</p>
      <p className='user-card-availability'><b>Available until:</b> {props.end}</p>
      <CamperDeleteButton handleSubmit={props.handleSubmit} handleDelete={props.handleDelete} camper_id={props.camper_id} />
    </div>
    );
};

export default CamperInfo;
