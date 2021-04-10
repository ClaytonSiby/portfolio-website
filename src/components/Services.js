import React from 'react';
import {
  Container, Row, Card, Col,
} from 'react-bootstrap';
import styles from '../assets/styles/services.module.css';
import article from '../assets/images/article_writing.jpg';
import development from '../assets/images/web_development.jpg';
import userinterface from '../assets/images/userinterface.jpg';
import gamedev from '../assets/images/gamedev.jpg';

const Services = () => (
  <Container
    id="services&amp;Technologies"
    className={`p-0 py-2 ${styles.servicesSection}`}
  >
    <header className="text-center">
      <h3 className="sectionTitle text-light">
        <i>Services &amp; Technologies</i>
      </h3>
    </header>
    <Row className="my-2 p-3 ">
      <Col xs={12} sm={12} md={12} className="my-2 p-0">
        <span className={`${styles.rectangle} ml-3`} />
        <span className={`${styles.serviceTitle} mx-2`}>Services</span>
        <Row className={`text-light p-3 ${styles.servicesHolder}`}>
          <Col xs={12} sm={12} md={3} className="">
            <Card className={`p-0 text-dark ${styles.service}`}>
              <Card.Img variant="top" src={`${development}`} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  With my skills in software development, I can translate
                  business requirements into software solutions from scratch.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3} className="">
            <Card className={`p-0 text-dark ${styles.service}`}>
              <Card.Img variant="top" src={`${gamedev}`} />
              <Card.Body>
                <Card.Title>Game Development</Card.Title>
                <Card.Text>
                  I have good skills in game development, mainly focusing on
                  browser game applications using Phaser3 framework.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3} className="">
            <Card className={`p-0 text-dark ${styles.service}`}>
              <Card.Img variant="top" src={`${userinterface}`} />
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  A good developer is a good designer, flexibility means more
                  opportunities. I have elegant skills in UI/UX design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3} className="">
            <Card className={`p-0 text-dark ${styles.service}`}>
              <Card.Img variant="top" src={`${article}`} />
              <Card.Body>
                <Card.Title>Article Writing</Card.Title>
                <Card.Text>
                  I can help write Software Documentation. Have a look at some
                  of my published articles in the featured section.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={6} className="">
        <span className={`${styles.square}`} />
        <span className={`${styles.serviceTitle} mx-2`}>Technologies</span>
        <div>
          <Card className={`my-3 ${styles.service}`}>
            <Card.Body className="d-flex justify-content-around">
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <ul className="text-dark my-3">
                    <li className="list-item">JavaScript</li>
                    <li className="list-item">React/Redux</li>
                    <li className="list-item">TypeScript</li>
                    <li className="list-item">BootStrap</li>
                    <li className="list-item">Ruby</li>
                    <li className="list-item">Ruby On Rails</li>
                    <li className="list-item">Html</li>
                    <li className="list-item">CSS/SCSS</li>
                    <li className="list-item">Jest Testing Library</li>
                    <li className="list-item">React-Testing-Library</li>
                  </ul>
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <ul className="text-dark my-3">
                    <li className="list-item">PostgreSql</li>
                    <li className="list-item">MySql</li>
                    <li className="list-item">Webpack</li>
                    <li className="list-item">Github / Git / GitFlow</li>
                    <li className="list-item">Test Driven Development</li>
                    <li className="list-item">Behavior Driven Development</li>
                    <li className="list-item">Desployment</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} className="">
        <span className={`${styles.circle}`} />
        <span className={`${styles.serviceTitle} mx-2`}>Skills</span>
        <Card className={`my-3 ${styles.service}`}>
          <Card.Body>
            <Row>
              <Col>
                <ul className="my-3 text-dark">
                  <li className="list-item">Communication</li>
                  <li className="list-item">Collaboration</li>
                  <li className="list-item">Teamwork</li>
                  <li className="list-item">Problem Solving</li>
                  <li className="list-item">Algorithms</li>
                  <li className="list-item">DataStructures</li>
                  <li className="list-item">
                    Strong English ( Written and Verbal )
                  </li>
                  <li className="list-item">Emotional Intelligence</li>
                  <li className="list-item">Strong Work Ethic</li>
                  <li className="list-item">Professionalism</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Services;
