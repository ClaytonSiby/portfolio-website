import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../assets/styles/header.module.css';

const Header = () => (
  <Container className={`${styles.header} p-0 text-light`}>
    <div className={`${styles.headerDescription}`}>
      <h3 className={`${styles.heroTitle}`}>Hi, I&apos;m Clayton Siby</h3>
      <h2 className={`${styles.heroStack}`}>Full-Stack Software Developer</h2>
      <p className={`${styles.headerText} my-3`}>
        I am a Software Enthusiast, I can help you develop web applications.
        Check out some of my works in the
        {' '}
        <strong>Projects</strong>
        {' '}
        section,
        impressed? Then contact me &amp; let&apos;s collaborate!
      </p>
      <p className={`${styles.socialIcons} my-3`}>
        <span className={`${styles.socialIcon} m-1`}>
          <a href="https://linkedin/in/claytonsiby" rel="noreferrer" target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <a href="https://github.com/ClaytonSiby" rel="noreferrer" target="_blank">
            <i className="fab fa-github" />
          </a>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <a href="https://twitter.com/ClaytonSiby" rel="noreferrer" target="_blank">
            <i className="fab fa-twitter" />
          </a>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <a href="https://angel.co/u/clayton-siby" rel="noreferrer" target="_blank">
            <i className="fab fa-angellist" />
          </a>
        </span>
      </p>

      <div className="my-3">
        <button type="button" className={`${styles.resumeBtn} btn btn-md btn-info text-light`}>Get my Resume</button>
        <p className={`my-5 text-info ${styles.workAlert}`}><i>Actively Open for New Opportunities!</i></p>
      </div>
    </div>
  </Container>
);

export default Header;
