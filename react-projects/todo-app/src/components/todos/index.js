import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import List from "./list";
import "./todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([
    { text: "Learn JavaScript", done: false },
    { text: "Learn React", done: true },
    { text: "Have a life!", done: false },
  ]);
  useEffect(() => {}, [todos]);

  const [filterText, setFilterText] = useState("");

  const filter = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <section className="todoApp">
        <Header setFilterText={setFilterText} />
        <List todos={filter} setTodos={setTodos} />
        <Footer />
      </section>
    </div>
  );
}
