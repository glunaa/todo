import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import TodoItem from './TodoItem';
//import { takeCoverage } from 'v8';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      setList([...list, todo]);
      setTodo(''); // Clear the input field
    }
  };

  const handleDeleteTask = (taskId: number) => {

    const updatedTasks = list.filter((_,index) => index !== taskId);
    setList(updatedTasks);
  } 
  return (
    <div>
      <Form>
        <InputGroup className="mb-3 inputText">
          <Form.Control
            placeholder="New task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </InputGroup>
        <Button
          type="submit"
          variant="primary"
          onClick={(e) => handleAddTodo(e)}
        >
          Add
        </Button>
      </Form>
      <hr />
      <ul className="listItems">
        {list.map((task,index) => (
          <TodoItem key={index}text={task} id={index} onDelete={handleDeleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
