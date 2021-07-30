import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import User from "./components/User";
const friends = [
  { id: 1, name: "ahmet" },
  { id: 2, name: "mehmet" },
  { id: 3, name: "ayşe" },
];
function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {/*  //props */}
      {/*  <User
        name="Doğukan"
        surname="Karasansar"
        age={19}
        isLogedIn={true}
        friends={friends}
        address={{
          title: "İstanbul",
          zip: 34513,
        }}
      /> */}
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
