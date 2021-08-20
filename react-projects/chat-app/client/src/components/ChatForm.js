import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../socketApi";
import "./styles.modules.css";

export default function ChatForm() {
  const { setMessages } = useChat();
  const [message, setMessage] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    setMessages((prevState) => [...prevState, { message, fromMe: true}]);
    sendMessage(message);
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          className="textInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}
