import React, { useEffect, useState } from "react";

export default function Header({ setFilterText }) {
  
  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <form>
          <input
            onChange={(e) => setFilterText(e.target.value)}
            className="new-todo"
            placeholder="Ara..."
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}
