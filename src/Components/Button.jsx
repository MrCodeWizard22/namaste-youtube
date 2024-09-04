import React from "react";

export const Button = ({ name }) => {
  return (
    <div className="m-3 bg-gray-300 w-auto py-1 px-2 rounded-lg cursor-pointer">
      {name}
    </div>
  );
};
