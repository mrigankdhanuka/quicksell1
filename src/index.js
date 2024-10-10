import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global CSS styles
import App from './App'; // Main application component
import reportWebVitals from './reportWebVitals'; // Performance measuring utility

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within StrictMode for additional checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app by passing a function to log results
reportWebVitals(); // You can pass console.log or an analytics endpoint if needed
