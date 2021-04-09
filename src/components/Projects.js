import React, { useState } from 'react';
import {
  Container, Col, Row, Card, Modal,
} from 'react-bootstrap';
import styles from '../assets/styles/projects.module.css';

function Projects() {
  const [showModal1, setShowModal1] = useState(false);
  const handleClose = () => setShowModal1(false);
  const handleShow = () => setShowModal1(true);

  const [showModal2, setShowModal2] = useState(false);
  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

  const [showModal3, setShowModal3] = useState(false);
  const handleClose3 = () => setShowModal3(false);
  const handleShow3 = () => setShowModal3(true);

  const [showModal4, setShowModal4] = useState(false);
  const handleClose4 = () => setShowModal4(false);
  const handleShow4 = () => setShowModal4(true);

  const [showModal5, setShowModal5] = useState(false);
  const handleClose5 = () => setShowModal5(false);
  const handleShow5 = () => setShowModal5(true);

  const [showModal6, setShowModal6] = useState(false);
  const handleClose6 = () => setShowModal6(false);
  const handleShow6 = () => setShowModal6(true);

  return (
    <Container className={`my-3 p-0 ${styles.projectsSection}`}>
      <header className="text-center">
        <h3 className="sectionTitle ">
          <i>Projects</i>
        </h3>
      </header>
      <Row>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.catalogue}`}
            >
              <Card.Title className="px-3">Meal Recipe Catalogue</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  This is a food recipe catalogue which helps users to
                  conviniently prepare tasty home-made meals.
                </span>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  React
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Redux
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  React-Bootstrap
                </button>
              </Card.Text>
              <Modal
                show={showModal1}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Meal Recipe Catalogue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {' '}
                  This is a food recipe catalogue which helps users to
                  conviniently prepare tasty home-made meals.
                </Modal.Body>
              </Modal>
              <button
                type="button"
                className="btn btn-block btn-info"
                variant="info"
                onClick={handleShow}
              >
                View Project
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.lifestyles}`}
            >
              <Card.Title className="px-3">Lifestyle Articles</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  A site where consumers can post, vote and read on articles
                  information.
                </span>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Ruby
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Ruby On Rails
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Rails-Rspec
                </button>
              </Card.Text>
              <Modal
                show={showModal2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Lifestyle Articles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  A site where consumers can post, vote and read on articles
                  information.
                </Modal.Body>
              </Modal>
              <button
                type="button"
                className="btn btn-block btn-info"
                variant="info"
                onClick={handleShow2}
              >
                View Project
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.bugDodger}`}
            >
              <Card.Title className="px-3">Phaser3 Bug Dodger</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  This is a web-based game in which players need to dodge the
                  falling bugs to survive and earn more points.
                </span>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Phaser3
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  ECMaScript6
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Jest-Tests
                </button>
              </Card.Text>
              <Modal
                show={showModal3}
                onHide={handleClose3}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Phaser3 Bug Dodger</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This is a web-based game in which players need to dodge the
                  falling bugs to survive and earn more points.
                </Modal.Body>
              </Modal>
              <button
                type="button"
                className="btn btn-block btn-info"
                variant="info"
                onClick={handleShow3}
              >
                View Project
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.scrapper}`}
            >
              <Card.Title className="px-3">Web Scrapper</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  A Web Scraper that takes information from Medium Website and
                  displays it on the terminal.
                </span>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Ruby
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Rspec
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  HTTParty
                </button>
              </Card.Text>
              <Modal
                show={showModal4}
                onHide={handleClose4}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Web Scrapper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  A Web Scraper that takes information from Medium Website and
                  displays it on the terminal.
                </Modal.Body>
              </Modal>
              <button
                type="button"
                className="btn btn-block btn-info"
                variant="info"
                onClick={handleShow4}
              >
                View Project
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.calculator}`}
            >
              <Card.Title className="px-3">Calculator</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  Need to do a quick Math? Use this fast and convenient web
                  application from the browser of your choice.
                </span>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  buildpack
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Webpack
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  EcmaScript 6
                </button>
              </Card.Text>
              <Modal
                show={showModal5}
                onHide={handleClose5}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Need to do a quick Math? Use this fast and convenient web
                  application from the browser of your choice.
                </Modal.Body>
              </Modal>
              <button
                type="button"
                className="btn btn-block btn-info"
                variant="info"
                onClick={handleShow5}
              >
                View Project
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.magicBooks}`}
            >
              <Card.Title className="px-3">Magic Books</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  It is an app for a Germany fictional company Magic Books Inc.
                  The application helps organize and manage the company&apos;s
                  bookstore.
                </span>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  buildpack
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  Webpack
                </button>
                <button
                  type="button"
                  className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                >
                  EcmaScript 6
                </button>
              </Card.Text>
              <Modal
                show={showModal6}
                onHide={handleClose6}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Magic Books</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  It is an app for a Germany fictional company Magic Books Inc.
                  The application helps organize and manage the company&apos;s
                  bookstore.
                </Modal.Body>
              </Modal>
              <button
                type="button"
                className="btn btn-block btn-info"
                variant="info"
                onClick={handleShow6}
              >
                View Project
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
