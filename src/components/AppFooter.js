import React from 'react';
import AddButton from './AddButton';
import InfoButton from './InfoButton';

const AppFooter = props => {
  return (
    <div className='App-footer'>
      <AddButton open={props.open} />
      <InfoButton openInfo={props.openInfo} />
    </div>
    );
};

export default AppFooter;