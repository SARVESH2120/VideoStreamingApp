// const Button = ({ name }) => {
//   return (
//     <div>
//       <button className="px-5 py-2 m-2 bg-gray-600 text-white rounded-xl ">
//         {name}
//       </button>
//     </div>
//   );
// };

// export default Button;



const Button = ({ name }) => {
  return (
    <button
      className="
        px-4 py-1.5 m-2
        bg-[#1e293b]
        text-[#e5e7eb]
        border border-[#334155]
        rounded-full
        text-sm
        hover:bg-[#334155]
        hover:text-[#38bdf8]
        transition
        whitespace-nowrap
      "
    >
      {name}
    </button>
  );
};

export default Button;
