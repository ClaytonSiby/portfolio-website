import React, { useState } from 'react'
import { Container, Col, Row, Card, Button, Modal } from 'react-bootstrap'
import styles from '../assets/styles/projects.module.css'

function Projects () {
  const [showModal1, setShowModal1] = useState(false)
  const handleClose = () => setShowModal1(false)
  const handleShow = () => setShowModal1(true)

  const [showModal2, setShowModal2] = useState(false)
  const handleClose2 = () => setShowModal2(false)
  const handleShow2 = () => setShowModal2(true)

  const [showModal3, setShowModal3] = useState(false)
  const handleClose3 = () => setShowModal3(false)
  const handleShow3 = () => setShowModal3(true)

  const [showModal4, setShowModal4] = useState(false)
  const handleClose4 = () => setShowModal4(false)
  const handleShow4 = () => setShowModal4(true)

  const [showModal5, setShowModal5] = useState(false)
  const handleClose5 = () => setShowModal5(false)
  const handleShow5 = () => setShowModal5(true)

  const [showModal6, setShowModal6] = useState(false)
  const handleClose6 = () => setShowModal6(false)
  const handleShow6 = () => setShowModal6(true)

  return (
    <Container className={`my-3 p-0 ${styles.projectsSection}`}>
      <header className='text-center'>
        <h3 className='sectionTitle '>
          <i>Projects</i>
        </h3>
      </header>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Meal Recipe Catalogue</Card.Title>
              <Card.Text>
                This is a food recipe catalogue which helps users to
                conviniently prepare tasty home-made meals.
              </Card.Text>
              <Modal
                show={showModal1}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
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
              <Button variant='primary' onClick={handleShow}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Lifestyle Articles</Card.Title>
              <Card.Text>
                A site where consumers can post, vote and read on articles
                information.
              </Card.Text>
              <Modal
                show={showModal2}
                onHide={handleClose2}
                backdrop='static'
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Lifestyle Articles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  A site where consumers can post, vote and read on articles
                  information.
                </Modal.Body>
              </Modal>
              <Button variant='primary' onClick={handleShow2}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Phaser3 Bug Dodger</Card.Title>
              <Card.Text>
                This is a web-based game in which players need to dodge the
                falling bugs to survive and earn more points.
              </Card.Text>
              <Modal
                show={showModal3}
                onHide={handleClose3}
                backdrop='static'
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Phaser3 Bug Dodger</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This is a web-based game in which players need to dodge the
                  falling bugs to survive and earn more points.
                </Modal.Body>
              </Modal>
              <Button variant='primary' onClick={handleShow3}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Web Scrapper</Card.Title>
              <Card.Text>
                A Web Scraper that takes information from Medium Website and
                displays it on the terminal.
              </Card.Text>
              <Modal
                show={showModal4}
                onHide={handleClose4}
                backdrop='static'
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Web Scrapper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  A Web Scraper that takes information from Medium Website and
                  displays it on the terminal.
                </Modal.Body>
              </Modal>
              <Button variant='primary' onClick={handleShow4}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Calculator</Card.Title>
              <Card.Text>
                Need to do a quick Math? Use this fast and convenient web
                application from the browser of your choice.
              </Card.Text>
              <Modal
                show={showModal5}
                onHide={handleClose5}
                backdrop='static'
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Need to do a quick Math? Use this fast and convenient web
                  application from the browser of your choice.
                </Modal.Body>
              </Modal>
              <Button variant='primary' onClick={handleShow5}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Magic Books</Card.Title>
              <Card.Text>
                It is an app for a Germany fictional company Magic Books Inc.
                The application helps organize and manage the company&apos;s
                bookstore.
              </Card.Text>
              <Modal
                show={showModal6}
                onHide={handleClose6}
                backdrop='static'
                keyboard={false}
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
              <Button variant='primary' onClick={handleShow6}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
