import React, { useEffect } from "react";
import "./introduction.css";
import test from '../../assets/Untitled.png'
import TextFlow from "../TextFlow/TextFlow";
import "../About/about.css";

function Introduction() {
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 600) {
        document.querySelector(".introduction h2").style.animation = "showLi 0.6s both ease";
        document.querySelector(".introduction h2").style.animationDelay = "0.6s";
        document.querySelector(".hero-img").style.animation = "showLi 0.6s both ease";
        document.querySelector(".hero-img").style.animationDelay = "1.2s";
        document.querySelector(".introduction p").style.animation = "showLi 0.6s both ease";
        document.querySelector(".introduction p").style.animationDelay = "1.2s";
      }  else {

        document.querySelector(".introduction p").style.animation = "fadeOut forwards 0.2s ease";
        //   document.querySelector(".introduction p").style.animationDelay = "1.2s";

        document.querySelector(".introduction h2").style.animation = "fadeOut forwards 0.2s ease-out";
        //document.querySelector(".introduction h2").style.animationDelay = "0.2s";
      }
    });
  }, []);

  return (

    <div className="introduction" id="aboutt">
          
   

      <h2>
        <span style={{ color: "#222831", fontSize: "0.4em", marginBottom: "7px" }}>Hi, my name is</span>
        <br />
        Oxana T.
        <br />
        <span className="text-effect" style={{ fontWeight: "lighter", color: "rgb(255, 4, 255)", marginTop:'10px' }}>
          {" "}
          I am building web <br/>applications.
        </span>
      </h2>
      <div className="hero">
        <div className="hero-img">
      <img src={test} alt=""></img>
      </div>
      <p>
        I’m a front end developer specializing in building <br />
        and designing exceptional digital experiences.
        <br />
        <br />
      </p>
      

      
      </div>

      <TextFlow />

    </div>


  );
}

export default Introduction;
