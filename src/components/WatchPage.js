import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div>
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="A Journey to Deadliest Roads of Spiti Valley"
            FrameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          {" "}
          <LiveChat />{" "}
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
