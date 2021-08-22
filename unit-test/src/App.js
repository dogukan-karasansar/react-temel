import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <Todo />
    </div>
  );
}

export default App;
