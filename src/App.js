import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Convertor from './Convertor';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1>Converor from Decimal to Roman letters</h1>
      <Convertor/>
    </Container>
  );
}

export default App;
