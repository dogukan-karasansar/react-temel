import React from "react";

export default function List() {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          <li className="completed">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button class="destroy"></button>
            </div>
          </li>
          <li>
            <div class="view">
              <input className="toggle" type="checkbox" />
              <label>Learn React</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
