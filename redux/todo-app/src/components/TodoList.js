import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, destroy } from "../redux/todos";

export default function TodoList() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    if (window.confirm("Silmek İstedipinize eminmisiniz?")) {
      dispatch(destroy(id));
    }
  };

  return (
    <ul className="todo-list">
      {/* <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn JavaScript</label>
          <button className="destroy"></button>
        </div>
      </li> */}

      {items.map((item) => (
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
