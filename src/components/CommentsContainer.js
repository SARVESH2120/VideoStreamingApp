import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Sarvesh Gupta",
    text: " I am immortal King ",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },

      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
    ],
  },
  {
    name: "Sarvesh Gupta",
    text: " I am immortal King ",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
    ],
  },
  {
    name: "Sarvesh Gupta",
    text: " I am immortal King ",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
    ],
  },
  {
    name: "Sarvesh Gupta",
    text: " I am immortal King ",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: " I am immortal King ",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <Comment data={commentsData[0]} />
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
