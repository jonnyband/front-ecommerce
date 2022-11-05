import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Router } from "./Routes/router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <BrowserRouter>
  <GlobalStyle/>
    <Router />

    </BrowserRouter>
  </React.StrictMode>
);