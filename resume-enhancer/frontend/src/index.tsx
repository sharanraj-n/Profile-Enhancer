import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css'; // or global.css if that's the filename

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);