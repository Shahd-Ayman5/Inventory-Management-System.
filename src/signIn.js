import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SignIn =()=>{
   
  const [ email , setEmail] = useState("");
  const [ firstName , setFirstName] = useState("");
  const [ lastName , setLastName] = useState("");


  const [validated, setValidated] = useState(false);

  const onSubmit = async (e)=>{
      const form = e.currentTarget;
      e.preventDefault()
      if (form.checkValidity() === false) {
        e.stopPropagation();
        setValidated(true);
        return;
      }
        const data = { email , firstName , lastName}
        const url = "http://127.0.0.1:5000/create_users"
        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body : JSON.stringify(data)
        }

        try {
          console.log('Sending request to:', url);
          const response = await fetch(url, options);
          console.log('Response status:', response.status);
          if (response.ok) {
              console.log("Users added successfully");
              setEmail("");
              setFirstName("");
              setLastName("");

          } else {
              console.error("Failed to add user", response.statusText);
          }
      } catch (error) {
          console.error('Error submitting form:', error);
      }
  }

  
    return (
        <>

            <Form noValidate validated={validated} onSubmit={onSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label htmlFor="email" >Email</Form.Label>
          <Form.Control 
          className = "label" type="text" placeholder="Email" required
          id="name" value={email} onChange={(e)=> setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
      className = "label"
        type="password"
        placeholder="Password"
        aria-describedby="passwordHelpBlock" required
      />
      <Form.Text id="passwordHelpBlock" muted>
      must be 8-20 characters long, contain letters and numbers.
      </Form.Text>
      <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
          </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
           id="first name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}
          className = "label"
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
           id="last name" value={lastName} onChange={(e)=> setLastName(e.target.value)}
          className = "label"
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Form.Group >
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button className="mb-3" style={{ backgroundColor: 'black', color: 'white' }} type="submit" >
  Sign In
</Button>
      </Form>
        </>
    );
}

export default SignIn;