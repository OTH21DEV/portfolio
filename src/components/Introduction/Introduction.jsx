import React, { useEffect } from "react";
import "./introduction.css";

function Introduction() {
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 600) {
        document.querySelector(".introduction h2").style.animation = "showLi 0.6s both ease";
        document.querySelector(".introduction h2").style.animationDelay = "0.9s";
        document.querySelector(".introduction p").style.animation = "showLi 0.6s both ease";
        document.querySelector(".introduction p").style.animationDelay = "1.2s";
      } else {

        document.querySelector(".introduction p").style.animation = "fadeOut forwards 0.3s ease";
        //   document.querySelector(".introduction p").style.animationDelay = "1.2s";

        document.querySelector(".introduction h2").style.animation = "fadeOut forwards 0.3s ease-out";
        document.querySelector(".introduction h2").style.animationDelay = "0.2s";
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
        <span className="text-effect" style={{ fontWeight: "lighter", color: "rgb(255, 4, 255)", fontSize: "1em" }}>
          {" "}
          I am building web applications.
        </span>
      </h2>

      <p>
        I’m a front end developer specializing in building <br />
        and designing exceptional digital experiences.
        <br />
        <br />
      </p>
    </div>
  );
}

export default Introduction;
