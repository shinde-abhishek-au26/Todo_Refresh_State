import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function NewForm({ setTodos }) {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') {
      return;
    }
    // eslint-disable-next-line react/prop-types
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <h1 className="header1">Todo App</h1>
        <div className="form-row">
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
