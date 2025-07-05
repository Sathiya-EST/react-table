import React from "react";
import ChildTwo, { type CardData, type Cardprops } from "./ChildTwo";

const ChildOne = ({ data }: Cardprops) => {
  return (
    <div>
      <ChildTwo data={data} />
    </div>
  );
};

export default ChildOne;
