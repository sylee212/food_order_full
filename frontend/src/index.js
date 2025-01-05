import "./styles/style.css";


// USED FOR TESTING REACT 
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+

import App from './App.js';
import { BrowserRouter } from "react-router-dom";

// Find the root DOM node
// need an eelement in .html to be able to work
const rootElement = document.getElementById('root');

// Create the root and render the App component
const root = ReactDOM.createRoot(rootElement); // Use createRoot instead of render
root.render(
  <React.StrictMode> 
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
);




