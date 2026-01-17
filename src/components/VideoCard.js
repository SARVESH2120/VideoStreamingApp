// import React from "react";

// const VideoCard = ({ info }) => {
//   console.log(info);

//   const { snippet, statistics } = info;
//   const { channelTitle, thumbnails } = snippet;

//   return (
//     <div className="p-3  m-3 w-72 shadow-lg">
//       <img className="rounded-lg" src={thumbnails.medium.url} alt="Thumbnail" />
//       <ul>
//         <li className="font-bold py-1">{snippet.title}</li>
//         <li className="font-serif text-base">{channelTitle}</li>
//         <li className="font-serif text-base">{statistics.viewCount} views</li>
//       </ul>
//     </div>
//   );
// };

// export default VideoCard;



import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div
      className="
        w-72 p-3 m-3
        bg-[#1e293b]
        border border-[#334155]
        rounded-lg
        hover:scale-[1.03]
        transition
        cursor-pointer
      "
    >
      <img
        className="rounded-md mb-3"
        src={thumbnails.medium.url}
        alt="Thumbnail"
      />

      <ul className="space-y-1">
        <li className="text-[#e5e7eb] font-semibold text-sm line-clamp-2">
          {title}
        </li>

        <li className="text-[#94a3b8] text-xs">
          {channelTitle}
        </li>

        <li className="text-[#94a3b8] text-xs">
          {Number(statistics.viewCount).toLocaleString()} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
