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
    <Container className={`my-3 p-0 ${styles.projectsSection}`} id="projects">
      <header className="text-center">
        <h3 className="sectionTitle ">
          <i>Projects</i>
        </h3>
      </header>
      <Row>
        <Col xs={12} sm={12} md={4} className="my-3">
          <Card className={`${styles.roundedEdgeCard}`}>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.catalogue}`}
            >
              <Card.Title className="px-3">Meal Recipe Catalogue</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  This is a food recipe catalog that helps users to conveniently
                  prepare tasty homemade meals.
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
                className={`${styles.modal}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Meal Recipe Catalogue</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                  <Row className={`${styles.modalBody}`}>
                    <Col
                      xs={12}
                      md={5}
                      className={`${styles.modalImage} ${styles.catalogueImg}`}
                    />
                    <Col
                      xs={12}
                      md={7}
                      className="my-2 d-flex flex-column justify-content-center"
                    >
                      <p>
                        SIBYMeals is a fully responsive web application which
                        serves the purpose of helping end-users to conveniently
                        prepare delicious meals for their families &amp; loved
                        ones.
                      </p>
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          ReactJs
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          React-Bootstrap
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          React-Redux
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          LocalStorage
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Heroku
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          BuildPack
                        </button>
                      </div>
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          <span>
                            <a
                              href="https://sibymealscatalogue.herokuapp.com"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              View Live
                              {' '}
                              <i className="fas fa-external-link-alt" />
                            </a>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          {' '}
                          <span>
                            <a
                              href="https://github.com/ClaytonSiby/MealsCatalogue-Application"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              Source Code
                              {' '}
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
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
          <Card className={`${styles.roundedEdgeCard}`}>
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
                className={`${styles.modal}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Lifestyle Articles</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                  <Row className={`${styles.modalBody}`}>
                    <Col
                      xs={12}
                      md={5}
                      className={`${styles.modalImage} ${styles.lifestylesImg}`}
                    />
                    <Col
                      xs={12}
                      md={7}
                      className="my-2 d-flex flex-column justify-content-center"
                    >
                      <p>
                        Lifestyle-Articles is a web application built with
                        business specifications using the Ruby on Rails
                        framework. Users on the site can share ideas through
                        article writing and they can interact with articles
                        written by other users through up/downvotes.
                      </p>
                      <div>
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
                          Ruby-On-Rails
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Carrierwave
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Heroku
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Cloudinary
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Rspec
                        </button>
                      </div>
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          <span>
                            <a
                              href="https://siblife.herokuapp.com/"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              View Live
                              {' '}
                              <i className="fas fa-external-link-alt" />
                            </a>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          {' '}
                          <span>
                            <a
                              href="https://github.com/ClaytonSiby/RoR-Capstone-Lifestyle-articles"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              Source Code
                              {' '}
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
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
          <Card className={`${styles.roundedEdgeCard}`}>
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
                className={`${styles.modal}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Phaser3 Bug Dodger</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                  <Row className={`${styles.modalBody}`}>
                    <Col
                      xs={12}
                      md={5}
                      className={`${styles.modalImage} ${styles.phaserImg}`}
                    />
                    <Col
                      xs={12}
                      md={7}
                      className="my-2 d-flex flex-column justify-content-center"
                    >
                      <p>
                        Bug Dodger is a game that I developed using the phaser3
                        framework, vanilla es6 Javascript ( modules, classes,
                        arrow-functions ) &amp; webpack. API calls ( get &amp;
                        post requests ).
                      </p>
                      <div>
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
                          JavaScript
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Jest-Tests
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          API
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Netlify
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Eslint
                        </button>
                      </div>
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          <span>
                            <a
                              href="https://bug-dodger-app.netlify.app/"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              View Live
                              {' '}
                              <i className="fas fa-external-link-alt" />
                            </a>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          {' '}
                          <span>
                            <a
                              href="ttps://github.com/ClaytonSiby/Phaser3-JS-Capstone"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              Source Code
                              {' '}
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
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
          <Card className={`${styles.roundedEdgeCard}`}>
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
                className={`${styles.modal}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Web Scrapper</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                  <Row className={`${styles.modalBody}`}>
                    <Col
                      xs={12}
                      md={5}
                      className={`${styles.modalImage} ${styles.scrapperImg}`}
                    />
                    <Col
                      xs={12}
                      md={7}
                      className="my-2 d-flex flex-column justify-content-center"
                    >
                      <p>
                        Web scraping tool built on Ruby. This web scraper pulls
                        data/information on articles written by students from
                        the Medium website, helping alumni to quickly get access
                        to useful articles for their convenience.
                      </p>
                      <div>
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
                          Debuging (PRY)
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          HTTParty
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Nokogiri
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Scraper-API
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Colorize Gem
                        </button>
                      </div>
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          <span>
                            <a
                              href="https://github.com/ClaytonSiby/Web_Scraper"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              View Live
                              {' '}
                              <i className="fas fa-external-link-alt" />
                            </a>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          {' '}
                          <span>
                            <a
                              href="https://github.com/ClaytonSiby/Web_Scraper"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              Source Code
                              {' '}
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
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
          <Card className={`${styles.roundedEdgeCard}`}>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.calculator}`}
            >
              <Card.Title className="px-3">Calculator</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  Need to do quick math? Use this fast and convenient web
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
                className={`${styles.modal}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                  <Row className={`${styles.modalBody}`}>
                    <Col
                      xs={12}
                      md={5}
                      className={`${styles.modalImage} ${styles.calculatorImg}`}
                    />
                    <Col
                      xs={12}
                      md={7}
                      className="my-2 d-flex flex-column justify-content-center"
                    >
                      <p>
                        Need to do a quick basic math calculation? This app will
                        help you achieve that from any web browser of your
                        choice. Built with React, Heroku, webpack4.
                      </p>
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          JavaScript
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          ReactJs
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          React-Router-Dom
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Big.Js
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Heroku
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          BuildPack
                        </button>
                      </div>
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          <span>
                            <a
                              href="https://the-react-calculator.herokuapp.com/"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              View Live
                              {' '}
                              <i className="fas fa-external-link-alt" />
                            </a>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          {' '}
                          <span>
                            <a
                              href="https://github.com/ClaytonSiby/The_Calculator"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              Source Code
                              {' '}
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
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
          <Card className={`${styles.roundedEdgeCard}`}>
            <Card.Body
              className={`p-0 pt-2 ${styles.cardBody} ${styles.magicBooks}`}
            >
              <Card.Title className="px-3">Magic Books</Card.Title>
              <Card.Text>
                <span className="px-3 d-block mb-1">
                  It is an app for a German fictional company Magic Books Inc.
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
                className={`${styles.modal}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Magic Books</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                  <Row className={`${styles.modalBody}`}>
                    <Col
                      xs={12}
                      md={5}
                      className={`${styles.modalImage} ${styles.booksImg}`}
                    />
                    <Col
                      xs={12}
                      md={7}
                      className="my-2 d-flex flex-column justify-content-center"
                    >
                      <p>
                        This application is built with real-world business
                        specifications. It is an app for a German fictional
                        company Magic Books Inc. The application helps organize
                        and manage the company&apos;s bookstore.
                      </p>
                      <div>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          ReactJs
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          React-Bootstrap
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          React-Redux
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm btn-default border mx-3 my-1 text-light ${styles.technology}`}
                        >
                          Eslint
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
                          BuildPack
                        </button>
                      </div>
                      <div className="my-3">
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          <span>
                            <a
                              href="https://magicbooks-inc.herokuapp.com/"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              View Live
                              {' '}
                              <i className="fas fa-external-link-alt" />
                            </a>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mx-2 my-1 btn-info"
                        >
                          {' '}
                          <span>
                            <a
                              href="https://github.com/ClaytonSiby/Magic-Books-Inc"
                              rel="noreferrer"
                              target="_blank"
                              className="text-light"
                            >
                              Source Code
                              {' '}
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
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
