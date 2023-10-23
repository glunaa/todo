import React from 'react';
import { useState } from 'react';
interface TodoItemProps {
  text: string;
}
const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  return (
    <div className={`todo-item ${isDeleted ? 'deleted' : ''}`}>
      <input className="checkbox" type="checkbox"></input>
      <span>
        <li>{text}</li>
      </span>
      <button className="deleteButton" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
