import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'E:/web development/Inventory/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Log =()=>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label >Email</Form.Label>
          <Form.Control className = "label" type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
      className = "label"
        type="password"
        id="inputPassword5"
        placeholder="Password"
        aria-describedby="passwordHelpBlock" required
      />
      <Form.Text id="passwordHelpBlock" muted>
      </Form.Text>
      <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
          </Form.Group>
          </Row>

        <Button style={{ backgroundColor: 'black', color: 'white' }} type="submit">
        Log In
        </Button>
            </Form>
        </>
      );
}
export default Log;