// import { useEffect, useState } from "react";
// import { setSearchKey, toggleMenu } from "../utils/appSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import { cacheResults } from "../utils/searchSlice";
// import { useSearchParams } from "react-router-dom";

// const Head = () => {
//   const searchKey = useSelector((store) => store.app.searchKey);

//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [url, setUrl] = useSearchParams();

//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();

//   const handleUrl = (event)=>{
//     event.preventDefault();
//     setUrl( "results="  + searchKey)

//   }

//   const handleQueryChange = (e) => {
//     dispatch(setSearchKey(e.target.value));
//   };

//   useEffect(() => {
//     // console.log(searchQuery)
//     const timer = setTimeout(() => {
//       if (searchCache[searchKey]) {
//         setSuggestions(searchCache[searchKey]);
//       } else {
//         getSearchSuggestions();
//       }
//     }, 200);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchKey]);

//   const getSearchSuggestions = async () => {
//     const data = await fetch(YOUTUBE_SEARCH_API + searchKey);
//     const json = await data.json();
//     // console.log(json[1])
//     setSuggestions(json[1]);

//     dispatch(
//       cacheResults({
//         [searchKey]: json[1],
//       })
//     );
//   };

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className="grid grid-flow-col p-5 m-2  shadow-lg align-middle">
//       <div className="flex col-span-1">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-8 cursor-pointer "
//           src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
//           alt="hamMenuIcon"
//         />
//         <a href="/">
//           {" "}
//           <img
//             className="h-8 mx-3"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
//             alt="youtubeIcon"
//           />
//         </a>
//       </div>
//       <div className="col-span-10 text-center ">
//         <form onSubmit={handleUrl}>
//         <div>
//           <input
//             className="w-1/2 shadow-inner rounded-l-2xl border border-gray-200 p-1"
//             type="text"
//             value={searchKey}
//             url={  searchKey}
//             onChange={handleQueryChange}
//             onFocus={() => setShowSuggestions(true)}
//             onBlur={() => setShowSuggestions(false)}
//           />
//           <button className="p-1 shadow-inner font-semibold text-md rounded-r-2xl border border-gray-200">
//             🔎
//           </button>
//         </div>
//         </form>
//         {showSuggestions && (
//           <div className="ml-[16rem]  fixed bg-white py-2 px-5 w-[37rem] shadow-inner rounded-lg border border-gray-100">
//             <ul>
//               {suggestions.map((s) => (
//                 <li  key={s} className="py-2 shadow-inner hover:bg-gray-100">
//                   {" "}
//                   🔎 {s}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="col-span-1">
//         <img
//           className="h-8"
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
//           alt="userIcon"
//         />
//       </div>
//     </div>
//   );
// };
// export default Head;



import { useEffect, useState } from "react";
import { setSearchKey, toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useSearchParams } from "react-router-dom";

const Head = () => {
  const searchKey = useSelector((store) => store.app.searchKey);
  const searchCache = useSelector((store) => store.search);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [url, setUrl] = useSearchParams();

  const dispatch = useDispatch();

  const handleUrl = (e) => {
    e.preventDefault();
    setUrl("results=" + searchKey);
  };

  const handleQueryChange = (e) => {
    dispatch(setSearchKey(e.target.value));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchKey) return;

      if (searchCache[searchKey]) {
        setSuggestions(searchCache[searchKey]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchKey]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchKey);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchKey]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="grid grid-flow-col items-center px-6 py-3 bg-[#0f172a] border-b border-[#1e293b]">
      {/* LEFT */}
      <div className="flex items-center gap-4 col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-7 cursor-pointer opacity-80 hover:opacity-100 transition"
          src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
          alt="menu"
        />

        <a href="/" className="text-lg font-semibold tracking-wide">
          <span className="text-[#38bdf8]">Retro</span>
          <span className="text-[#a78bfa]">Tube</span>
        </a>
      </div>

      {/* CENTER SEARCH */}
      <div className="col-span-10 flex justify-center relative">
        <form onSubmit={handleUrl} className="w-full flex justify-center">
          <div className="flex w-1/2">
            <input
              type="text"
              value={searchKey}
              onChange={handleQueryChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Search"
              className="
                flex-grow px-4 py-2
                bg-[#1e293b]
                text-[#e5e7eb]
                border border-[#334155]
                rounded-l-md
                outline-none
                focus:border-[#38bdf8]
                focus:ring-1 focus:ring-[#38bdf8]
                placeholder:text-[#94a3b8]
              "
            />

            <button
              className="
                px-4 py-2
                bg-[#38bdf8]
                text-[#0f172a]
                rounded-r-md
                hover:bg-[#7dd3fc]
                transition
              "
            >
              🔍
            </button>
          </div>
        </form>

        {/* SEARCH SUGGESTIONS */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            className="
              absolute top-12 w-1/2
              bg-[#1e293b]
              border border-[#334155]
              rounded-md
              shadow-lg
              z-50
            "
          >
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="
                    px-4 py-2
                    text-[#e5e7eb]
                    hover:bg-[#334155]
                    cursor-pointer
                  "
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="col-span-1 flex justify-end">
        <img
          className="h-8 opacity-80 hover:opacity-100 transition"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="user"
        />
      </div>
    </header>
  );
};

export default Head;
