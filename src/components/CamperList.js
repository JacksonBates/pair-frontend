import React from 'react';
import CamperCard from './CamperCard';

const CamperList = props => {
  return (
    <div className='container'>
      <div className='inner-container'>
        {props.campers.map((camper, i) => <CamperCard camper={camper} key={i} handleDelete={props.handleDelete}/>)}
      </div>
    </div>
    );
};

export default CamperList;
