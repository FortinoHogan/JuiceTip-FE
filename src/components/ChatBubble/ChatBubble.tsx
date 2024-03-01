import React from "react";
import Anchor from "../Anchor/Anchor";

const ChatBubble = () => {
  return (
    <Anchor
      variant="bg-10b981 fixed right-10 bottom-10 p-4 rounded-3xl gap-2 flex items-center justify-center"
      href="/chat"
    >
      <img
        src={require("../../assets/images/bubbleChat.png")}
        alt="bubbleChat"
      />
      <p className="text-white text-xl">Chat</p>
    </Anchor>
  );
};

export default ChatBubble;
