import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../assets/styles/header.module.css'
import NavBar from './NavBar';
// import thevideo from '../assets/videos/hero_bg.mp4'

const Header = () => {
  return (
    <Container className={`${styles.header} p-0`}>
      <NavBar />
    </Container>
  )
}

export default Header
