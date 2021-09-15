import React from "react";

export default function ContentFooter() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>2</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="https://d12n.me/" className="selected">All</a>
        </li>
        <li>
          <a href="https://d12n.me/">Active</a>
        </li>
        <li>
          <a href="https://d12n.me/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
