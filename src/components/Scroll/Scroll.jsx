import React, { useEffect } from "react";
import "./scroll.css";

function Scroll() {
  useEffect(() => {
    let section = document.querySelector("section");
    let side1 = document.getElementById("side1");
    let side2 = document.getElementById("side2");

    window.addEventListener("scroll", function (e) {
      if (!window.pageYOffset) {
        section.style.backgroundColor = "#222831";
      } else if (window.pageYOffset > 600) {
        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      } else {
        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      }
    });
  }, []);

  return (
    <section>
      <h2 className="title">Scroll to find more...</h2>

      <div className="side" id="side1"></div>
      <div className="side" id="side2"></div>
    </section>
  );
}

export default Scroll;
