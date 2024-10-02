import React, { useEffect, useState } from "react";
import { GOOGLE_VIDEOS_URL } from "../utils/Constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap justify-start p-4 gap-1">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id} key={video?.id} className="flex-shrink-0">
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};
