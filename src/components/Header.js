import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../assets/styles/header.module.css';

const Header = () => (
  <Container className={`${styles.header} p-0`} />
);

export default Header;
