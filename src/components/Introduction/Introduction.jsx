import React, { useEffect } from "react";
import "./introduction.css";
import heroImg from "../../assets/hero-img.png";
import TextFlow from "../TextFlow/TextFlow";

function Introduction() {
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 600) {
        document.querySelector(".introduction h2").style.animation = "showLi 0.6s both ease";
        document.querySelector(".introduction h2").style.animationDelay = "1.4s";
        document.querySelector(".hero-img").style.animation = "showLi 0.6s both ease";
        document.querySelector(".hero-img").style.animationDelay = "1.6s";
        document.querySelector(".introduction p").style.animation = "showLi 0.6s both ease";
        document.querySelector(".introduction p").style.animationDelay = "1.8s";
      } else {
        document.querySelector(".introduction p").style.animation = "fadeOut forwards 0.2s ease";
        document.querySelector(".hero-img").style.animation = "fadeOut forwards 0.2s ease-out";
        document.querySelector(".introduction h2").style.animation = "fadeOut forwards 0.2s ease-out";
      }
    });
  }, []);

  return (
    <div className="introduction" id="about">
      <h2>
        <span style={{ color: "#222831", fontSize: "0.4em", marginBottom: "7px" }}>Hi, my name is</span>
        <br />
        Oxana T.
        <br />
        <span className="text-effect" style={{ fontWeight: "lighter", color: "rgb(255, 4, 255)", marginTop: "10px" }}>
          {" "}
          I am building web <br />
          applications.
        </span>
      </h2>
      <div className="hero">
        <div className="hero-img">
          <img src={heroImg} alt=""></img>
        </div>
        <p>
          I’m a <span style={{ color: "#4f5c3b", fontWeight: "bold", fontFamily: "Bebas Neue", letterSpacing: "0.1em" }}>frontend developer </span>specializing in building <br />
          and designing exceptional digital experiences.
          <br />
          <br />
          Freshly graduated as a <span style={{ color: "#222831", fontWeight: "bold", fontFamily: "Bebas Neue", letterSpacing: "0.1em" }}>Javascript react application developer</span> I acquired the
          technical background <br />
          by developing the various applications and putting my knowledges into practice.
          <br />
          <br />
          You can find below some relevant projects. <br />
          <br />
          For more information please visit my{" "}
          <span>
            <a style={{ color: "rgb(255, 4, 255)", fontWeight: "bold", cursor: "pointer", textDecoration: "none" }} href="https://github.com/OTH21DEV">
              Github page{" "}
            </a>
          </span>
          or{" "}
          <span>
            <a style={{ color: "rgb(255, 4, 255)", fontWeight: "bold", cursor: "pointer", textDecoration: "none" }} href="https://www.linkedin.com/in/oxana-theis-417922158/">
              Linkedin
            </a>
          </span>
          .
          <br />
          <br />
        </p>
      </div>

      <TextFlow />
    </div>
  );
}

export default Introduction;
