import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './Header.module.css';

const Header = () => {
  return (
    <Jumbotron className={styles.header} fluid>
      <Container>
        <h1>Prime Time</h1>
        <h5>By Joseph Bianchi</h5>
        <p>
          This is an application that was built with
          <strong> React Hooks</strong>, the application communicates with an
          <strong> Express Server</strong>. The application accepts a
          'max number' and returns the median prime number from a list of all
          the prime numbers that are less than the provided 'max number'.
        </p>
        <small>Ancient Alogrithmic Approach: Sieve of Eratosthenes</small>
      </Container>
    </Jumbotron>
  )
}

export default Header;
