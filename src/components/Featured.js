import React from 'react';
import {
  Container, Col, Row, Card,
} from 'react-bootstrap';
import styles from '../assets/styles/featured.module.css';
import scss from '../assets/images/scss.png';

function Featured() {
  return (
    <Container className={`${styles.featured}`} id="publications">
      <header className="text-center">
        <h3 className="sectionTitle text-light my-2">
          <i>Publications</i>
        </h3>
      </header>
      <Row className="my-3 d-flex justify-content-center">
        <Col xs={12} md={3}>
          <Card>
            <Card.Img alt="post image" src={scss} />
            <Card.Body className="border-top">
              <Card.Title>
                <a
                  href="https://medium.com/@claytonsiby/the-power-of-a-css-pre-processor-6d72b2ff156a"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  The Power Of a CSS Pre-processor
                </a>
              </Card.Title>
              <Card.Text>
                This article serves the purpose of helping developers, (
                beginners &amp; advanced ) to quickly and easily start using the
                Sass preprocessor for better css file management.
                {' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Featured;
