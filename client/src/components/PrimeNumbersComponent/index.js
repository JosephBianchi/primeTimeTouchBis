import React from 'react';
import Card from 'react-bootstrap/Card';

import styles from './PrimeNumbers.module.css';

const PrimeNumbers = (props) => {
  const primeNumberList = props.median.map((num) => {
    return (
      <Card className={styles.numCard} key={num}>
        <p>{num}</p>
      </Card>
    )
  })

  return (
    <div>
      {primeNumberList}
    </div>
  )
}

export default PrimeNumbers
