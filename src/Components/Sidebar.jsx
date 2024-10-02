import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-64 h-full bg-gray-100 shadow-lg p-4">
      <h1 className="text-lg font-semibold mb-4">Home</h1>
      <h1 className="text-lg font-semibold mb-4">Shorts</h1>
      <h1 className="text-lg font-semibold mb-4">Subscription</h1>
      <h1 className="text-lg font-bold text-blue-500 mb-4">You</h1>
      <h1 className="text-lg font-semibold mb-4">Your channel</h1>
      <h1 className="text-lg font-semibold mb-4">History</h1>
      <h1 className="text-lg font-semibold mb-4">Playlist</h1>
      <h1 className="text-lg font-semibold mb-4">Your videos</h1>
    </div>
  );
};

export default Sidebar;
