import React, { useState } from "react";
import { send } from "../SocketApi";

export default function Palette() {
  const [color, setColor] = useState("#000");
  return (
    <div className="palette">
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <button onClick={() => send(color)}>Click</button>
      {color}
    </div>
  );
}
