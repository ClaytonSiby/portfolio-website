import React from 'react';
import {
  Container, Col, Row, Form, Button,
} from 'react-bootstrap';
import styles from '../assets/styles/contactform.module.css';

const ContactForm = () => (
  <Container
    id="services&amp;Technologies"
    className={`p-0 mt-3 py-2 ${styles.contactForm}`}
  >
    <header className="text-center">
      <h3 className="sectionTitle text-light">
        <i>Contact Me</i>
      </h3>
    </header>
    <p className={`m-2 text-info ${styles.connect}`}>Let&apos;s connect!</p>
    <Form className="m-2">
      <Row>
        <Col xs={12} sm={12} md={6} className="my-1">
          <Form.Control type="text" placeholder="Username" />
        </Col>
        <Col xs={12} sm={12} md={6} className="my-1">
          <Form.Control type="email" placeholder="Email Address" />
        </Col>

        <Col className="my-2">
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Leave a Message"
            />
          </Form.Group>
          <Button className="btn-block" variant="info" type="submit">
            Send Message
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);

export default ContactForm;
