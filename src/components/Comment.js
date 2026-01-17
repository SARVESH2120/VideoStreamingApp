// import React from "react";

// const Comment = ({ data }) => {
//   const { name, text, replies } = data;

//   return (
//     <div className="flex my-2 shadow-md bg-gray-100 p-2 rounded-md ">
//       <img
//         className=" w-12 h-12"
//         src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
//         alt="user-image"
//       />
//       <div className="px-3">
//         <p className="font-bold">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default Comment;



import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div
      className="
        flex items-start gap-3 my-3
        bg-[#1e293b]
        border border-[#334155]
        p-3
        rounded-lg
      "
    >
      <img
        className="w-10 h-10 rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="user"
      />

      <div>
        <p className="text-sm font-semibold text-[#e5e7eb]">
          {name}
        </p>
        <p className="text-sm text-[#cbd5f5]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Comment;
