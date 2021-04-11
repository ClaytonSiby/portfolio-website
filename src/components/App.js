import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Featured from './Featured';

function App() {
  return (
    <Container>
      <NavBar />
      <Header />
      <Services />
      <About />
      <Projects />
      <Featured />
    </Container>
  );
}

export default App;
