import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, destroy } from "../redux/todos";
import { selectFilteredTodos } from "../redux/todos/index";

export default function TodoList() {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm("Silmek İstedipinize eminmisiniz?")) {
      dispatch(destroy(id));
    }
  };


  return (
    <ul className="todo-list">
      {filteredItems.map((item) => (
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
