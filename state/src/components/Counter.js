import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrase = () => {
    if (counter >= 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div>
      {counter >= 0 ? <h1>{counter}</h1> : <h1>0</h1>}
      <button onClick={() => increase()}>+</button>
      <button onClick={() => decrase()}>-</button>
    </div>
  );
}
