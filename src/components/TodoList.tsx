import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState<{id: number; text: string; isChecked: boolean}[]>([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      setList([...list, { id: Date.now(), text: todo, isChecked: false }]);
      setTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

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
        <Button type="button" variant="primary" onClick={(e) => handleAddTodo(e)}>
          Add
        </Button>
      </Form>
      <hr />
      <ul className="listItems">
        {list.map((task) => (
          <TodoItem
            key={task.id}
            text={task.text}
            isChecked={task.isChecked}
            onDelete={() => handleDeleteTodo(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

