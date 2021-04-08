import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';
import Services from './Services';

function App() {
  return (
    <Container>
      <NavBar />
      <Header />
      <Services />
    </Container>
  );
}

export default App;
