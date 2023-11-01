import { useEffect, useState } from 'react';
import { NewForm } from './Newform';
import { Todolist } from './Todolist';
import './styles.css';

function App() {
  // getting items from localstorage.
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  // persisting values after refresh. we will able to see the values after refresh also.
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <NewForm setTodos={setTodos} />
      <h1 className="header">Todo list</h1>
      <Todolist setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
