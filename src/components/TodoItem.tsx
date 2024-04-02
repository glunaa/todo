import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
interface TodoItemProps {
  text: string;
  id: number; // unique number for eachtask 

  onDelete: (id : number) => void; // callback function for deletion
}

const TodoItem: React.FC<TodoItemProps> = ({ text,id,onDelete }) => {

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className="todo-item">
      <input className="checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
      <span>
        <li style={{textDecoration: isChecked ? 'line-through' : 'none'}}>{text}</li>
      </span>
      <Button variant="danger" type="button" className="deleteButton" onClick={handleDelete}>
        delete
      </Button>
    </div>
  );
};

export default TodoItem;
