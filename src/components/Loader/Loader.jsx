import React, { useState, useEffect } from "react";
import "../../components/Loader/Loader.css";
import anime from "animejs";

function Loader() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width:375px)and (max-width:800px)").matches);

  React.useEffect(() => {
    window.matchMedia("(min-width: 375px)and (max-width:800px)").addEventListener("change", (e) => setMatches(e.matches));

    let textWrapper = document.querySelector(".letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    function preventScroll(e) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    }
    //disable scroll mouse wheel desktop
    document.querySelector(".wrapper").addEventListener("wheel", preventScroll, { passive: false });
    //disable scroll mobile
    document.querySelector(".wrapper").addEventListener("touchmove", preventScroll, { passive: false });
    anime
      .timeline({ loop: false })
      .add({
        targets: ".letters .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: ".letters .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
  }, []);
  /***
   *  <div className="wrapper">
  <div className="letters">Welcome to my portfolio</div>
  </div>
   * 
   */
  let message = `Welcome \n to \n my portfolio`;
  return (
    <div className="wrapper">
      {matches ? (
        <div className="letters" style={{ whiteSpace: "pre-line", fontSize: "1.2em", lineHeight: "1.4em" }}>
          {message}
        </div>
      ) : (
        <div className="letters">Welcome to my portfolio</div>
      )}
    </div>
  );
}

export default Loader;
