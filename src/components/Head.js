import { useEffect, useState } from "react";
import { setSearchKey, toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useSearchParams } from "react-router-dom";

const Head = () => {
  const searchKey = useSelector((store) => store.app.searchKey);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [url, setUrl] = useSearchParams();

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const handleUrl = (event)=>{
    event.preventDefault();
    setUrl( "results="  + searchKey)

  }

  const handleQueryChange = (e) => {
    dispatch(setSearchKey(e.target.value));
  };

  useEffect(() => {
    // console.log(searchQuery)
    const timer = setTimeout(() => {
      if (searchCache[searchKey]) {
        setSuggestions(searchCache[searchKey]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchKey);
    const json = await data.json();
    // console.log(json[1])
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
    <div className="grid grid-flow-col p-5 m-2  shadow-lg align-middle">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
          alt="hamMenuIcon"
        />
        <a href="/">
          {" "}
          <img
            className="h-8 mx-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtubeIcon"
          />
        </a>
      </div>
      <div className="col-span-10 text-center ">
        <form onSubmit={handleUrl}>
        <div>
          <input
            className="w-1/2 shadow-inner rounded-l-2xl border border-gray-200 p-1"
            type="text"
            value={searchKey}
            url={  searchKey}
            onChange={handleQueryChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-1 shadow-inner font-semibold text-md rounded-r-2xl border border-gray-200">
            🔎
          </button>
        </div>
        </form>
        {showSuggestions && (
          <div className="ml-[16rem]  fixed bg-white py-2 px-5 w-[37rem] shadow-inner rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li  key={s} className="py-2 shadow-inner hover:bg-gray-100">
                  {" "}
                  🔎 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="userIcon"
        />
      </div>
    </div>
  );
};
export default Head;
