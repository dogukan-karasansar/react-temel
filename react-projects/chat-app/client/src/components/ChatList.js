import React from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import "./styles.modules.css";

import ScrollableFeed from "react-scrollable-feed";

export default function ChatList() {
  const { messages } = useChat();
  return (
    <div className="chatlist">
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}
