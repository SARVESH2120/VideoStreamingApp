// import React from "react";
// import Comment from "./Comment";
// import CommentsList from "./CommentsList";

// const commentsData = [
//   {
//     name: "Sarvesh Gupta",
//     text: " I am immortal King ",
//     replies: [
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },

//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Sarvesh Gupta",
//     text: " I am immortal King ",
//     replies: [
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Sarvesh Gupta",
//     text: " I am immortal King ",
//     replies: [
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Sarvesh Gupta",
//     text: " I am immortal King ",
//     replies: [
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//       {
//         name: "Sarvesh Gupta",
//         text: " I am immortal King ",
//         replies: [],
//       },
//     ],
//   },
// ];

// const CommentsContainer = () => {
//   return (
//     <div className="m-5 p-2">
//       <h1 className="text-2xl font-bold">Comments:</h1>
//       <Comment data={commentsData[0]} />
//       <CommentsList comments={commentsData} />
//     </div>
//   );
// };

// export default CommentsContainer;



import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Sarvesh Gupta",
    text: "I am immortal King",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
    ],
  },
  {
    name: "Sarvesh Gupta",
    text: "I am immortal King",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
    ],
  },
  {
    name: "Sarvesh Gupta",
    text: "I am immortal King",
    replies: [
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
      {
        name: "Sarvesh Gupta",
        text: "I am immortal King",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <section
      className="
        m-5 p-4
        bg-[#0f172a]
        border border-[#1e293b]
        rounded-lg
      "
    >
      <h1 className="text-lg font-semibold text-[#e5e7eb] mb-4">
        Comments
      </h1>

      <CommentsList comments={commentsData} />
    </section>
  );
};

export default CommentsContainer;
