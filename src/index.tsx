import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container>
      <Router />
    </Container>
  </React.StrictMode>
);
