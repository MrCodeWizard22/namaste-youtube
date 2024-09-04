import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg">
      <h1>Home</h1>
      <h1>Shorts</h1>
      <h1>Subscription</h1>
      <h1 className="font-bold">You</h1>
      <h1>Your channel</h1>
      <h1>History</h1>
      <h1>Playlist</h1>
      <h1>Your videos</h1>
    </div>
  );
};

export default Sidebar;
