import "./styles/style.css";


// USED FOR TESTING REACT 
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+

const App = () => {
  return <h1>React works</h1>;
};

// Find the root DOM node
// need an eelement in .html to be able to work
const rootElement = document.getElementById('root');

// Create the root and render the App component
const root = ReactDOM.createRoot(rootElement); // Use createRoot instead of render
root.render(<App />);

