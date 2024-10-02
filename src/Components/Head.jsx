import React from "react";
import { Logo_url } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link } from "react-router-dom";

export const Head = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10486/10486596.png"
          alt="Icon"
          className="h-8 my-3 mx-4 cursor-pointer"
          onClick={handleClick}
        />
      <Link to="/">
          <img src={Logo_url} alt="Logo" className="h-14 cursor-pointer" />
          </Link>
      </div>

      <div className="flex items-center justify-center col-span-8">
        <div className="flex items-center w-full max-w-2xl border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            className="flex-grow p-2 pl-4 border-none outline-none"
            placeholder="Search..."
          />
          <button className="bg-gray-100 px-4 py-2 border-none outline-none flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=50&id=e4NkZ7kWAD7f&format=png"
              className="h-6"
              alt="Search Icon"
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end col-span-3">
        <img
          src="https://img.icons8.com/?size=30&id=98957&format=png"
          alt="Icon"
          className="h-8 mx-2"
        />
        <img
          src="https://img.icons8.com/?size=80&id=LoDgQVjdqIpy&format=png"
          alt="Icon"
          className="h-12 mx-2"
        />
      </div>
    </div>
  );
};
