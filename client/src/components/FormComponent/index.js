import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './Form.module.css'

const FormComponent = (props) => {

  const handleSubmit = (event) => {
    props.onSubmit();
    event.preventDefault();
  }

  const changeHandler = (event) => {
    props.onChange(event);
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <Form.Label>{ props.label }</Form.Label>
        <Form.Control
          size="lg"
          onChange={ changeHandler }
          type="number"
          value={ props.value }
          placeholder={ props.placeholder }
        />
      <Button className={ styles.formButton } type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}

export default FormComponent;
