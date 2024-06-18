import React from "react";
import MenFootwear from "../MenFootwear/MenFootwear";
import FemaleFootwear from "../FemaleFootwear/FemaleFootwear";
import KidsFootwear from "../KidsFootwear/KidsFootwear";
import KidsWear from "../KidsWear/KidsWear";
import MaleTops from "../MaleTops/MaleTops";
import MaleBottoms from "../MaleBottoms/MaleBottoms";

const MenData = (props) => {
  return (
    <div>
      {props.category === "MaleFootwear" ? (
        <MenFootwear />
      ) : props.category === "FemaleFootwear" ? (
        <FemaleFootwear />
      ) : props.category === "KidsFootwear" ? (
        <KidsFootwear />
      ) : props.category === "Kids" ? (
        <KidsWear />
      ) : props.category === "MaleTops" ? (
        <MaleTops />
      ) : props.category === "MaleBottoms" ? (
        <MaleBottoms />
      ) : null}
    </div>
  );
};

export default MenData;