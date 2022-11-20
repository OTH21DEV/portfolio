//import styled, { keyframes } from "styled-components";

import "../../components/Loader/Loader.css";
import anime from "animejs";
import React from "react";




function Loader() {


  React.useEffect(() => {
    let textWrapper = document.querySelector(".letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    console.log(textWrapper);
    
    function preventScroll(e){
      e.preventDefault();
      e.stopPropagation();
  
      return false;
  }
  
    document.querySelector('.wrapper').addEventListener('wheel', preventScroll, {passive: false});
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

  return (
    <div className="wrapper">
  <div className="letters">Welcome to my portfolio</div>
  </div>
  );
}

export default Loader;
