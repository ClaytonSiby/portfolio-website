import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../assets/styles/header.module.css'
import thevideo from '../assets/videos/hero_bg.mp4'

const Header = () => {
  return (
    <Container className={`${styles.header}`}>
      <header className='v-header'>
        <div className='fullscreen-video-wrap'>
          <video autoPlay>
            {' '}
            <source src={thevideo} type='video/mp4' />{' '}
          </video>
        </div>
      </header>
    </Container>
  )
}

export default Header
