import React from 'react';
import { Todo } from '../App';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <button
        className={`todo-check${todo.completed ? ' checked' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path
              d="M1.5 5.5l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <span className="todo-text">{todo.text}</span>
      <button
        className="todo-delete"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M3 3l8 8M11 3l-8 8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
