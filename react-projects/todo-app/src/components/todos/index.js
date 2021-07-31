import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import List from "./list";
import "./todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript", done: false },
    { id: 2, text: "Learn React", done: true },
    { id: 3, text: "Have a life!", done: false },
  ]);
  var filter;

  useEffect(() => {}, [todos]);

  const [filterText, setFilterText] = useState("");
  const [filterData, setFilterData] = useState("all");

  filter = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  filter = todos.filter((item) => {
    if (filterData === "all") {
      return todos;
    } else if (filterData === "active") {
      return item.done === false;
    } else {
      return item.done === true;
    }
  });

  return (
    <div>
      <section className="todoApp">
        <Header setFilterText={setFilterText} />
        <List todos={filter} setTodos={setTodos} />
        <Footer todos={filter} setTodos={setTodos} filterData={filterData} setFilterData={setFilterData} />
      </section>
    </div>
  );
}
