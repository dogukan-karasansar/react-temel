import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <form>
          <input className="new-todo" placeholder="Ara..." autoFocus/>
        </form>
      </header>
    </div>
  );
}
