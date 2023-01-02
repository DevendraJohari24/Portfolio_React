import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavContextProvider } from './context/nav-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>
);
