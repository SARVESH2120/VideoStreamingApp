// import Button from "./Button";

// let list = [
//   "All",
//   "Gaming",
//   "Songs",
//   "Live",
//   "Soccer",
//   "Cricket",
//   "News",
//   "ETC",
// ];

// const ButtonList = () => {
//   return (
//     <div className="flex">
//       {list.map((chips) => (
//         <Button name={chips} />
//       ))}
//     </div>
//   );
// };

// export default ButtonList;



import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "ETC",
];

const ButtonList = () => {
  return (
    <div
      className="
        flex items-center
        h-14
        px-6
        overflow-x-auto
        scrollbar-hide
        bg-[#0f172a]
        border-b border-[#1e293b]
      "
    >
      {list.map((chips) => (
        <Button key={chips} name={chips} />
      ))}
    </div>
  );
};

export default ButtonList;
