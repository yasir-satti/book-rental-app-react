import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import ErrorBoundary from './components/app/ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
