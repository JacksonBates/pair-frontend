import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import data from './mock-data.js';

ReactDOM.render(
  <App campers={data} title='Currently working on dumb components and slowly learning React!' />,
  document.getElementById('root')
);
