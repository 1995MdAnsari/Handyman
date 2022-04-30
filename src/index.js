import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainComponent from "./Handyman/mainCom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);

