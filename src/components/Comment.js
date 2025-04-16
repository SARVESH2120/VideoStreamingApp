import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex my-2 shadow-md bg-gray-100 p-2 rounded-md ">
      <img
        className=" w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="user-image"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
