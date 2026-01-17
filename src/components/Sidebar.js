// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//   if (!isMenuOpen) return null;

//   return (
//     <div className="p-5 shadow-lg w-48">
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>Shorts</li>
//         <li>Videos</li>
//         <li>Live</li>
//       </ul>
//       <h1 className="font-bold pt-3">Subscriptions</h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//       <h1 className="font-bold pt-3">Watch Later</h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;




import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <aside
      className="
        w-52 min-h-screen
        bg-[#0f172a]
        border-r border-[#1e293b]
        px-4 py-5
        text-[#e5e7eb]
      "
    >
      {/* MAIN */}
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="
              block px-3 py-2 rounded-md
              hover:bg-[#1e293b]
              text-[#38bdf8]
              font-medium
            "
          >
            Home
          </Link>
        </li>

        {["Shorts", "Videos", "Live"].map((item) => (
          <li key={item}>
            <span
              className="
                block px-3 py-2 rounded-md
                hover:bg-[#1e293b]
                cursor-pointer
              "
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* SUBSCRIPTIONS */}
      <h2 className="mt-6 mb-2 px-3 text-sm font-semibold text-[#94a3b8] uppercase">
        Subscriptions
      </h2>

      <ul className="space-y-1">
        {["Music", "Sports", "Gaming", "Movies"].map((item) => (
          <li key={item}>
            <span
              className="
                block px-3 py-2 rounded-md
                hover:bg-[#1e293b]
                cursor-pointer
              "
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* WATCH LATER */}
      <h2 className="mt-6 mb-2 px-3 text-sm font-semibold text-[#94a3b8] uppercase">
        Watch Later
      </h2>

      <ul className="space-y-1">
        {["Music", "Sports", "Gaming", "Movies"].map((item) => (
          <li key={item}>
            <span
              className="
                block px-3 py-2 rounded-md
                hover:bg-[#1e293b]
                cursor-pointer
              "
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
