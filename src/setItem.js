import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const AddItem =({ })=>{

    const [ name , setName] = useState("");
    const [ type , setType] = useState("");
    const [ description , setDescription] = useState("");
    const [ quantity , setQuantity] = useState("");

    const [validated, setValidated] = useState(false);

    const onSubmit = async (e)=>{
        const form = e.currentTarget;
        e.preventDefault()
    if (form.checkValidity() === false) {
        e.stopPropagation();
        setValidated(true);
        return;
      }
        const data = {name , type , description , quantity}
        const url = "http://127.0.0.1:5000/create_items"
        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json' // Ensure this is set
            },
            body : JSON.stringify(data)
        }
        try {
            console.log('Sending request to:', url);
            const response = await fetch(url, options);
            console.log('Response status:', response.status);
            if (response.ok) {
                console.log("Item added successfully");
                // Handle successful response, e.g., clear form or notify user
                setName("");
                setType("");
                setDescription("");
                setQuantity("");
            } else {
                console.error("Failed to add item", response.statusText);
                // Handle errors if needed
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return(
        <>
         <Form noValidate validated={validated} onSubmit={onSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
          id="name" value={name} onChange={(e)=> setName(e.target.value)}
          className = "label"
            type="text"
            placeholder="name"
            required
          />
            <Form.Control.Feedback type="invalid">
              Please choose a name.
            </Form.Control.Feedback>        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label htmlFor="type">Type</Form.Label>
          <Form.Control
          id="type" value={type} onChange={(e)=> setType(e.target.value)}
          className = "label"
            type="text"
            placeholder="Type"
            required
          />
            <Form.Control.Feedback type="invalid">
              Please choose a type.
            </Form.Control.Feedback>        
            </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label htmlFor="description" >Description</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
            id="description" value={description} onChange={(e)=> setDescription(e.target.value)}
            className = "label"
              type="text"
              placeholder="Description"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a description.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label htmlFor="quantity" >Quantity</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
            id="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}
            className = "label"
              type="text"
              placeholder="Quantity"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a quantity.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Button style={{ backgroundColor: 'black', color: 'white' }} type="submit">
        Add
        </Button>
    </Form>
        </>
    );
}
export default AddItem; 
