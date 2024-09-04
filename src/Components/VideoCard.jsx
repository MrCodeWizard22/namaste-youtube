import React from "react";

export const VideoCard = ({ data }) => {
  return (
    <div className="flex flex-col w-64 p-4 m-4 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-36 overflow-hidden rounded-lg">
        <img
          src={
            data?.snippet?.thumbnails?.medium?.url ||
            data?.snippet?.thumbnails?.default?.url
          }
          alt={data?.snippet?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mt-2 text-lg font-semibold text-gray-800">
        {data?.snippet?.title}
      </h1>
      <h2 className="font-bold text-gray-700">{data?.snippet?.channelTitle}</h2>
      <h2 className="mt-1 text-sm text-gray-600">
        {data?.statistics?.viewCount} views
      </h2>
    </div>
  );
};
