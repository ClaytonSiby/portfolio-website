import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap';

function App () {
  return (
    <Container>
      <NavBar />
      <Header />
    </Container>
  )
}

export default App
