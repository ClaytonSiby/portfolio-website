import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import styles from '../assets/styles/navbar.module.css';

const NavBar = () => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/" className="text-info">ClaytonSiby</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Featured</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#services&amp;Technologies">
          Services&amp;Technologies
        </Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
