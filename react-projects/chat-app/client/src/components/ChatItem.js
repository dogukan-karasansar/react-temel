import React from "react";
import "./styles.modules.css";

export default function ChatItem({ item }) {
  return (
    <div className={`chatItem ${item.fromMe ? "right" : ""}`}>
      {item.message}
    </div>
  );
}
