import React, { useEffect, useState } from "react";
import { GOOGLE_VIDEOS_URL } from "../utils/Constants";
import { VideoCard } from "./VideoCard";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(GOOGLE_VIDEOS_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard data={video} key={video?.id} />
      ))}
    </div>
  );
};
