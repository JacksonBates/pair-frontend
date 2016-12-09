import React from 'react';
import CamperCard from './CamperCard';

const CamperList = props => {
  return (
    <div className='container'>
      <div className='row'>
        {props.campers.map((camper, i) => <CamperCard camper={camper} key={i} />)}
      </div>
    </div>
    );
};

export default CamperList;