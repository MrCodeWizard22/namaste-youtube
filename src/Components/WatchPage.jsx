import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppSlice, { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";

export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const videoId = searchParams.get("v");
  const src = `https://www.youtube.com/embed/${videoId}?si=cQcHW0uBtFWYpP6C`;

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
