import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#about'>Features</Nav.Link>
        <Nav.Link href='#projects'>Projects</Nav.Link>
        <Nav.Link href='#services'>Services &amp; Technologies</Nav.Link>
        <Nav.Link href='#contact'>Contact</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar
