import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HistoryProvider from './History';

ReactDOM.render(
  <HistoryProvider>
    <App />
  </HistoryProvider>,
  document.getElementById('root')
);
