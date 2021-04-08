import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';
import Services from './Services';
import About from './About';

function App() {
  return (
    <Container>
      <NavBar />
      <Header />
      <Services />
      <About />
    </Container>
  );
}

export default App;
