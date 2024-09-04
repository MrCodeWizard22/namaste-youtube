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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id}>
          <VideoCard data={video} key={video?.id} />
        </Link>
      ))}
    </div>
  );
};
