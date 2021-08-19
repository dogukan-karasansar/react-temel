import React, { useState } from "react";
import { send } from "../SocketApi";

export default function Palette({activeColor}) {
  const [color, setColor] = useState("#000");
  return (
    <div className="palette">
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={activeColor}
      />
      <button onClick={() => send(color)}>Click</button>
      {color}
    </div>
  );
}
