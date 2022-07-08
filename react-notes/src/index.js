import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import listStore from './store/listStore';


// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
console.log(window.React1);
console.log(window.React2);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(listStore.getState());
root.render(
  <React.StrictMode>
    <Provider store={listStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
