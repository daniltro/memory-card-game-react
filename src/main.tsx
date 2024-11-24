import ReactDOM from 'react-dom/client';
import React from 'react';
import './styles/main.css';
import App from './components/App/app';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
