import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails } = snippet;

  return (
    <div className="p-3  m-3 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="Thumbnail" />
      <ul>
        <li className="font-bold py-1">{snippet.title}</li>
        <li className="font-serif text-base">{channelTitle}</li>
        <li className="font-serif text-base">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
