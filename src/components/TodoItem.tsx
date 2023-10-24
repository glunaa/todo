import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
interface TodoItemProps {
  text: string;
  isChecked: boolean; // Add the isChecked prop to the interface
  onDelete: () => void;
}
const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const deleteTodo = (button: HTMLButtonElement) => {
    const li = button.parentElement as HTMLLIElement;
    li.remove(); // This will remove the todo item from the DOM
  }
  const handleDelete = (button) => {
    deleteTodo(button);
  };

  return (
    <div className={`todo-item ${isChecked ? 'checked' : ''} `}>
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
      ></input>
      <span>
        <li>{text}</li>
      </span>
      <Button variant="danger" className="deleteButton" onClick={handleDelete}>
        delete
      </Button>
    </div>
  );
};

export default TodoItem;
