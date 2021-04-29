import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../assets/styles/footer.module.css';

const Footer = () => (
  <Container className={`${styles.footer} p-0 m-0 d-flex flex-column align-items-center justify-content-center`}>
    <div className={`${styles.socialIcons} my-3 text-center`}>
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
      <p className="mt-1"><i>Designed and developed by Clayton Siby &copy;copyright 2021. #TheInitialStep</i></p>
    </div>

  </Container>
);

export default Footer;
