import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../assets/styles/header.module.css';

const Header = () => (
  <Container className={`${styles.header} p-0 px-2 text-light`}>
    <div className={`${styles.headerDescription} pt-5`}>
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
          <a
            href="https://www.linkedin.com/in/clayton-siby/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <a
            href="https://github.com/ClaytonSiby"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <a
            href="https://twitter.com/ClaytonSiby"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter" />
          </a>
        </span>
        <span className={`${styles.socialIcon} m-1`}>
          <a
            href="https://angel.co/u/clayton-siby"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-angellist" />
          </a>
        </span>
      </p>

      <div className="my-3">
        <button
          type="button"
          className={`${styles.resumeBtn} btn btn-md btn-info text-light`}
        >
          <a href="https://docs.google.com/document/d/1WN1g5zreK0sxs2oQceXPNOUaVwMAHe8qI_PPXzmKT7A/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-light">
            Get my Resume
          </a>
        </button>

        <div className={`my-5 text-info ${styles.workAlert} ${styles.scrollText}`}>
          <p><i>Currently Open to new Opportunities!</i></p>
        </div>

      </div>
    </div>
  </Container>
);

export default Header;
