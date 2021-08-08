import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return CalculateObject();
  }, []);
  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

function CalculateObject() {
  console.log("calculating");
  for (let i = 0; i <= 100000000; i++) {}
  console.log("calculating completed");
  return { name: "mehmet" };
}

export default App;
