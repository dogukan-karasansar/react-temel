import "./App.css";
import { useState, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const increment = useCallback(() => {
    return setNumber((prevState) => prevState + 1);
  }, []);
  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <div>{number}</div>
    </div>
  );
}

export default App;
