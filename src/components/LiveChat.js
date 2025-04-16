import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  });

  return (
    <>
      <div className="p-2 border ml-2 w-full h-[480px] bg-slate-100  rounded-lg overflow-y-scroll flex  flex-col-reverse">
        {chatMessages.map((c, idx) => (
          <ChatMessage key={idx} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 m-2  ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form submit");
          dispatch(
            addMessages({
              name: "Sarvesh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2 shadow-inner"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 rounded-lg shadow-md mx-2 bg-red-400">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
