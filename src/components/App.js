import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import NavBar from './NavBar';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Featured from './Featured';
import ContactForm from './ContactForm';
import Footer from './Footer';

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
      <Footer />
    </Container>
  );
}

export default App;
