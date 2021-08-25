import "./App.css";
/* import { Button, Paragraph } from "zebrui"; */
import { Button } from "lobus-button-ui";
/* import "../node_modules/zebrui/dist/index.css"; */

function App() {
  return (
    <div className="App">
      {/* <Button text={"Ödeme"} />
      <Paragraph text={"cafdsfsdfsdfsdƒ"} /> */}
      <Button text={"Clicked"} type={"primary"} />
    </div>
  );
}

export default App;
