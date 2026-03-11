import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

type Filter = 'all' | 'active' | 'completed';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setTodos(prev => [...prev, { id: generateId(), text, completed: false }]);
    setInput('');
  }, [input]);

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;
  const progress = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const filters: Filter[] = ['all', 'active', 'completed'];
  const filterCounts: Record<Filter, number> = {
    all: todos.length,
    active: activeCount,
    completed: completedCount,
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-icon" aria-hidden="true">✓</div>
        <h1 className="app-title">My Tasks</h1>
        <p className="app-date">{today}</p>
      </header>

      <main className="card">
        {todos.length > 0 && (
          <div className="progress-wrap" aria-label={`${progress}% complete`}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        )}

        <div className="add-row">
          <input
            className="add-input"
            type="text"
            placeholder="Add a new task…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            autoFocus
          />
          <button
            className="add-btn"
            onClick={addTodo}
            disabled={!input.trim()}
            aria-label="Add task"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {todos.length > 0 && (
          <div className="filter-row" role="tablist" aria-label="Filter tasks">
            {filters.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                <span className="filter-count">{filterCounts[f]}</span>
              </button>
            ))}
          </div>
        )}

        <ul className="todo-list" aria-label="Task list">
          {filtered.length === 0 ? (
            <li className="empty-state" aria-live="polite">
              {filter === 'completed'
                ? 'No completed tasks yet'
                : filter === 'active'
                ? 'All done — great job!'
                : 'Add your first task above'}
            </li>
          ) : (
            filtered.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </ul>

        {todos.length > 0 && (
          <div className="card-footer">
            <span className="tasks-left">
              {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
            </span>
            {completedCount > 0 && (
              <button className="clear-btn" onClick={clearCompleted}>
                Clear completed
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
