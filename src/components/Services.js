import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../assets/styles/services.module.css';

const Services = () => (
  <Container id="services&amp;Technologies" className={`p-0 py-2 ${styles.servicesSection}`}>
    <section>
      <header className="text-center">
        <h3 className="sectionTitle text-light"><i>Services &amp; Technologies</i></h3>
      </header>
    </section>
  </Container>
);

export default Services;
