import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Featured from './Featured';
import ContactForm from './ContactForm';

function App() {
  return (
    <Container>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Featured />
      <ContactForm />
    </Container>
  );
}

export default App;
