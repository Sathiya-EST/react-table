import React, { useContext, useEffect } from "react";
import ChildOne from "./ChildOne";
import type { CardData } from "./ChildTwo";
import { CardContext } from "../Context/CardContext";

const Parent = () => {
  const cardData: CardData[] = [
    {
      name: "John Doe",
      age: 30,
      hobbies: ["reading", "painting"],
    },
    {
      name: "John",
      age: 20,
      hobbies: ["painting"],
    },
    {
      name: "Doe",
      age: 10,
      hobbies: ["painting"],
    },
  ];

  return (
    <div>
      <ChildOne data={cardData} />
    </div>
  );
};

export default Parent;
