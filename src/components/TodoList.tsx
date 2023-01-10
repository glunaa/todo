import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';


const TodoList = () => {
  return (
    <div>
      <InputGroup className="mb-3 inputText">
        <Form.Control
          placeholder="New task..."
          aria-label="New task..."
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <Button variant="primary">Add</Button>
    </div>
  );
};

export default TodoList;
