import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const searchKey = useSelector((store) => store.app.searchKey);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap items-center justify-center ">
      {videos
        .filter((video) => {
          console.log(video);
          return video.snippet.title.toLowerCase().includes(searchKey);
        })
        .map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
