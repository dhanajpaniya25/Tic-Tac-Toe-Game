import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

// This is the entry point of the React application
// It connects React with the HTML file (index.html)

// createRoot is used to enable React's modern rendering (React 18+)
// It tells React where to render the entire app in the DOM
ReactDOM.createRoot(document.getElementById('root')).render(

    // Render the main App component
    // This acts as the root component for the entire application
    <App />
);