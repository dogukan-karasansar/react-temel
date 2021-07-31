import React from "react";

export default function List({ todos, setTodos }) {
  const checkTodo = (index, todo) => {
    const newTodos = [...todos];
    newTodos[index] = { ...todo, done: todo.done ? false : true };
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  };
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {/* List */}
          {todos.map((todo, i) => (
            <li key={i} className={todo.done ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={todo.done}
                  onChange={() => checkTodo(i, todo)}
                />
                <label>{todo.text}</label>
                <button
                  onClick={() => deleteTodo(todo)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}

          {/* End List */}
        </ul>
      </section>
    </div>
  );
}
