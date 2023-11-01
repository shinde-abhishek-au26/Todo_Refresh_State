// eslint-disable-next-line react/prop-types
export function Todolist({ setTodos, todos }) {
  const deleteTodo = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };
  return (
    <>
      <ul className="list">
        {/* eslint-disable-next-line react/prop-types */}
        {todos.length === 0 && 'No Todos'}

        {/* eslint-disable-next-line react/prop-types */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
