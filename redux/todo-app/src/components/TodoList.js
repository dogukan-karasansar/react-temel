import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos,
  getTodoAsync,
} from "../redux/todos";
import Loading from "./Loading";
import Error from "./Error";

export default function TodoList() {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  const handleDestroy = (id) => {
    if (window.confirm("Silmek İstedipinize eminmisiniz?")) {
      dispatch(destroy(id));
    }
  };

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

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
