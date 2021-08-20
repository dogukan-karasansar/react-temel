import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

export default function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
    subscribeInitialMessages((messages) => {
      setMessages(messages);
    });
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}
