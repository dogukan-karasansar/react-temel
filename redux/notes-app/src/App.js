import "./App.css";
import Content from "./components/Content";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <h2 style={{ color: "grey" }}>NotesApp</h2>
      <Filter />
      <Content />
    </div>
  );
}

export default App;
