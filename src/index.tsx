import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './1-hello-world/App';
// import App from './2-children/App';
// import App from './3-communication-and-events/App';
// import App from './4-state/App';
// import App from './5-forms/App';
// import App from './6-fetching-data/App';
// import App from './7-global-state/App';
import App from './8-todo-list/App';
import './reset.css';

/**
 * This file is what we call the entry point: The start of your react app
 *
 * Prior to React 18 this looked like this:
 * 
 * import ReactDOM from 'react-dom'
 * 
 * ReactDOM.render( 
 *  <React.StrictMode>
 *    <App />
 *  </React.StrictMode>,
 *  document.getElementById('root') as HTMLElement
 * )
 *
 * The effects of React.StrictMode are pretty small and this is considered
 * good practice for development https://reactjs.org/docs/strict-mode.html.
 * 
 * In general:
 * 
 * 1. Identifies unsafe lifecycles
 * 2. Warns on usage of legacy APIs
 * 
 * A concrete effect of React.StrictMode is forcing useEffect 
 * calls to run *twice*. This will not happen in production but
 * in development it allows easy detection of useEffect issues.
 */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);