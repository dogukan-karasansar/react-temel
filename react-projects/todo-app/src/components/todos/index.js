import React from "react";
import Footer from "./footer";
import Header from "./header";
import List from "./list";
import "./todos.css";

export default function Todos() {
  return (
    <div>
      <section className="todoApp">
        <Header />
        <List />
        <Footer />
      </section>
    </div>
  );
}
