import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontStyles } from './components/styles/fontStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontStyles/>
    <App />
  </React.StrictMode>
);
