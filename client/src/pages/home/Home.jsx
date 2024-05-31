import React from "react";
import SmoothScroll from "../../helper/SmoothScroll";
import Cursor from "../../helper/Cursor";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <div className="home">
        <Link to={"/preferences"}>Preferences</Link>
        <Link to={"/templates"}>templates</Link>
      </div>
    </>
  );
}
