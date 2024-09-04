import React from "react";
import { Button } from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "mostviewed",
    "liked",
    "News",
    "mix",
    "scienceFiction",
    "History",
    "India",
    "physics",
    "romantic",
    "belief",
    "media",
    "ben10",
    "marvel",
    "tomnjerry",
    "mahabharat",
    "captainAmerica",
  ];

  return (
    <div className="flex flex-row ">
      {buttons.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
