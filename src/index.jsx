import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './routes';

//'App' contém as rotas de navegção entre as páginas
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
