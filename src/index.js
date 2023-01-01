import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducer/store';
import GlobalFont from './components/layout/font';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <Provider store={store}>
    <GlobalFont/>
    <App />
  </Provider>
);
