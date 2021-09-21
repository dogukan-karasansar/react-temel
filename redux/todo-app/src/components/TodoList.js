import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, destroy } from "../redux/todos";

let filtered = [];
export default function TodoList() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const handleDestroy = (id) => {
    if (window.confirm("Silmek İstedipinize eminmisiniz?")) {
      dispatch(destroy(id));
    }
  };

  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  console.log(activeFilter)
  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={`${item.completed && "completed"}`}>
          <div className="view">
            <input
              onChange={() => dispatch(toggle(item.id))}
              className="toggle"
              checked={item.completed}
              type="checkbox"
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}
