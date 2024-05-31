import React from "react";
import SmoothScroll from "../../../helper/SmoothScroll";
import Cursor from "../../../helper/Cursor";

export default function TempStyle() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <div className="temp-style">
        <div className="temp-style-left"></div>
        <div className="temp-style-right"></div>
      </div>
    </>
  );
}
