// import React from "react";
// import Sidebar from "./Sidebar";
// import MainContainer from "./MainContainer";
// import WatchPage from "./WatchPage";
// import { Outlet } from "react-router-dom";

// const Body = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <Outlet />
//     </div>
//   );
// };

// export default Body;



import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex bg-[#0f172a] min-h-screen text-[#e5e7eb]">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
