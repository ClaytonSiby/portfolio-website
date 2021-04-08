import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../assets/styles/header.module.css'

const Header = () => (
  <Container className={`${styles.header} p-0 text-light`}>
    <div className={`${styles.headerDescription}`}>
      <h3>Hi, I&apos;m Clayton Siby</h3>
      <h2>Full-Stack Software Developer</h2>
      <p className='header-text my-3'>
        I am a Software Enthusiast, I can help you develop web applications.
        Check out some of my works in the <strong>Projects</strong> section,
        impressed? Then contact me &amp; let&apos;s collaborate!
      </p>
      <p className={`${styles.socialIcons} my-3`}>
        <span className={`${styles.socialIcon} m-1`}>
          <i className='fab fa-linkedin-in'></i>
        </span>
        <span className={`${styles.socialIcon} m-1`}> 
          <i className='fab fa-github'></i>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <i className='fab fa-twitter'></i>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <i className='fab fa-angellist'></i>
        </span>
      </p>

      <div className="my-3">
        <button className="btn btn-md btn-info text-light">Get my Resume</button>
      </div>
    </div>
  </Container>
)

export default Header
