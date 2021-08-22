import React, { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([
    { name: "ıtem a" },
    { name: "ıtem b" },
    { name: "ıtem c" },
  ]);

  const addItem = () => {
    setItems((prevState) => [...prevState, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>
      <br />
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
