import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 m-1">
      <img
        className="h-8"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="userIcon"
      />
      <span className="font-bold px-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
