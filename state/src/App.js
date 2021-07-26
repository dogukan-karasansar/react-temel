import { useState } from "react";

function App() {
  const [name, setName] = useState("Doğukan");
  const [age, setAge] = useState(19);
  return (
    <div className="app">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("İbo")}>isim seç</button>
      <button onClick={() => setAge(25)}>yaş seç</button>
    </div>
  );
}

export default App;
