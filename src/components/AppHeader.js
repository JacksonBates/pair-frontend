import React from 'react';
import FccIcon from './FccIcon';
import Header from './Header';

const AppHeader = props => {
  return (
    <div className="App-header">
      <Header >{props.headerText}<FccIcon /> {props.appName}</Header>
    </div>
  )
};

export default AppHeader;