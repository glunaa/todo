import React from 'react';
import { Button } from 'react-bootstrap';
interface TodoItemProps {
  text: string;
}
const TodoItem: React.FC<TodoItemProps> = ({ text }) => {

  return (
    <div className='todo-item'>
      <input
        className="checkbox"
        type="checkbox"
      ></input>
      <span>
        <li>{text}</li>
      </span>
      <Button variant="danger"type='button' className="deleteButton">
        delete
      </Button>
    </div>
  );
};

export default TodoItem;
