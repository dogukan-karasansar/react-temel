import logo from "./logo.svg";
import "./App.css";
import { Button, Paragraph } from "zebrui";
import "../node_modules/zebrui/dist/index.css";

function App() {
  return (
    <div className="App">
      <Button text={"Ödeme"} />
      <Paragraph text={"cafdsfsdfsdfsdƒ"} />
    </div>
  );
}

export default App;
