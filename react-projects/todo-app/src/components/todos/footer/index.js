import React from "react";

export default function Footer({ todos, setTodos, filterData, setFilterData }) {
  const allCompleted = () => {
    const newTodos = [];
    setTodos(newTodos);
  };
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length} </strong>
          items
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={() => setFilterData("all")}
              className={filterData === "all" ? "selected" : null}
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilterData("active")}
              className={filterData === "active" ? "selected" : null}
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={() => setFilterData("completed")}
              className={filterData === "completed" ? "selected" : null}
            >
              Completed
            </a>
          </li>
        </ul>
        <button onClick={() => allCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}
