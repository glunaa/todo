import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import TodoItem from './TodoItem'; // Import the TodoItem component
const TodoList = () => {

    const [todo, addTodo] = useState<string>('');
    const [list,addList] = useState<string[]>([]);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){// 
        e.preventDefault();
        if(todo.trim() !== ''){
          addList([...list,todo]);
          addTodo('');
        }
        
    }
    
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 inputText">
          <Form.Control

            placeholder="New task..."
            aria-label="New task..."
            aria-describedby="basic-addon2"
            onChange={(e) => addTodo(e.target.value)} 

          />
        </InputGroup>
        <Button type="submit"variant="primary">Add</Button>
      </Form>
      <hr/>
      <ul className='listItems'>
      {list.map((task, index) => (
          <TodoItem key={index} text={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
