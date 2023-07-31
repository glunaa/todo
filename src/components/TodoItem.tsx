import React from 'react';
interface TodoItemProps{
    text: string
}
const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return <span><li>{text}</li><input className="checkbox"type='checkbox'></input></span>;
};

export default TodoItem;