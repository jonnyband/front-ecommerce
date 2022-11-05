import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CartContent} from "./Contexts"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContent>
    <App></App>
    </CartContent>

  </React.StrictMode>
);