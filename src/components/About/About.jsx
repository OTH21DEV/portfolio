import React, { useState } from "react";
import Scroll from "../Scroll/Scroll";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import { Waypoint } from "react-waypoint";
import "./about.css";

function About() {
  const [contentBx, setContentBx] = useState(true);

  return (
    <div className="wrapper-contentBx">
      <Scroll />

      <div className="contentBx">
        <Header contentBxSection={contentBx} setSection={setContentBx} />

        <Introduction />

        <Waypoint bottomOffset="-1600px" scrollableAncestor={window} onEnter={() => setContentBx(true)} onLeave={() => setContentBx(false)} />
      </div>
    </div>
  );
}

export default About;
