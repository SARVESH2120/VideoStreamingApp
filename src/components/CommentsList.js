// import React from "react";
// import Comment from "./Comment";

// const CommentsList = ({ comments }) => {
//   return comments.map((comment, idx) => {
//     return (
//       <div>
//         <Comment key={idx} data={comment} />
//         <div className="pl-5 border border-l-black ml-5 ">
//           <CommentsList comments={comment.replies} />
//         </div>
//       </div>
//     );
//   });
// };

// export default CommentsList;


import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="space-y-2">
      {comments.map((comment, idx) => (
        <div key={idx}>
          <Comment data={comment} />

          {comment.replies?.length > 0 && (
            <div
              className="
                ml-6 pl-4
                border-l-2 border-[#334155]
              "
            >
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
