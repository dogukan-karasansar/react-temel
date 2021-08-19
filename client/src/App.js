import { useEffect, useState } from "react";
import "./App.css";
import Palette from "./components/Palette";
import { init, subscribe } from "./SocketApi";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;
