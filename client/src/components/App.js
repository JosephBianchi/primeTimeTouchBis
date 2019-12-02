import React, { useState } from 'react';

import styles from './App.module.css';
import { math } from '../apis/math.js';
import Form from './FormComponent';
import PrimeNumbers from './PrimeNumbersComponent';
import Header from './HeaderComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdCheckCircle } from "react-icons/md";
import { MdSentimentDissatisfied } from "react-icons/md";
import loading from '../assets/ballLoader.gif';

const App = (props) => {
  const { propsPrimeNumbers, propsMaxInt, propsErrorMessage, propsIsLoading, propsLastSearch } = props;
  const [primeNumbers, setPrimeNumbers] = useState(propsPrimeNumbers || {});
  const [maxInt, setMaxInt] = useState(propsMaxInt || '');
  const [lastSearch, setLastSearch] = useState(propsLastSearch || '');
  const [errorMessage, setErrorMessage] = useState(propsErrorMessage || '');
  const [isLoading, setIsLoading] = useState(propsIsLoading || false);

  const handleSubmit = () => {
    setLastSearch(maxInt);
    setIsLoading(true)
    fetch(`${math}/prime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({maxInt: parseInt(maxInt)})
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPrimeNumbers(data);
      setMaxInt('')
      console.log(data.errorMessage);
      setErrorMessage(data.errorMessage)
      setIsLoading(false);
      console.log(data);
      return data;
    })
    .catch((err) => {
        console.log("Something went wrong!", err);
    });
  }

  const changeHandler = (event) => {
    setMaxInt(event.target.value)
  }

  return (
    <div className={styles.App}>
      <Header />
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <h3>Median Prime Numbers
              <strong>
              {
                (lastSearch && !errorMessage) ?
                  ` for non-inclusive max of: ${lastSearch}`:
                null
              }
              </strong>
            </h3>  
            <Form
              label='Non-Inclusive Max'
              onSubmit={ handleSubmit }
              value={ maxInt }
              onChange={ changeHandler }
              placeholder='Enter a Number greater than or equal to 3'
            />
          </Col>
        </Row>
        <Row>
          {
            isLoading ? <img className={styles.loading} src={loading} alt="loading" /> :
            <>
              <Col md={{ span: 4, offset: 2 }}>
                <div>
                  {
                    (errorMessage.length === 0 && primeNumbers.median) ?
                    <PrimeNumbers
                      median={ primeNumbers.median }
                    /> : (errorMessage.length > 0) ?
                    <p className={ styles.errorMessage }>{ errorMessage }</p> :
                      null
                  }
                </div>
              </Col>
              <Col>
                {
                  (errorMessage.length === 0 && primeNumbers.median) ?
                    <MdCheckCircle className={ styles.successIcon } /> :
                    (errorMessage.length > 0) ?
                      <MdSentimentDissatisfied className={ styles.warningIcon } /> :
                      null
                }
              </Col>
            </>
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
