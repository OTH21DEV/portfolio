import "../../components/Intro/Intro.css";
import React, { useEffect, useState} from "react";


import { Waypoint } from "react-waypoint";
import Header from "../Header/Header";
import TextFlow from "../TextFlow/TextFlow";

import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Scroll from "../Scroll/Scroll";

function Intro() {
  const [contentBx, setContentBx] = useState(true);

  useEffect(() => {
    //
    window.scrollTo({ top: 0, behavior: "smooth" });

    window.addEventListener("scroll", function (e) {
      if (!window.pageYOffset) {

        //add function to cancel the hash while navigate
        let loc = window.location.href,
          index = loc.indexOf("#");

        if (index > 0) {
          window.location = loc.substring(0, index);
        }
      } else if (window.pageYOffset > 600) {
        document.querySelector(".contentBx h2").style.animation = "showLi 0.6s both ease";
        document.querySelector(".contentBx h2").style.animationDelay = "0.9s";
        document.querySelector(".contentBx p").style.animation = "showLi 0.6s both ease";
        document.querySelector(".contentBx p").style.animationDelay = "1.2s";

      
      } else {
        console.log("suis moins 600");
        document.querySelector(".contentBx p").style.animation = "fadeOut forwards 0.3s ease";
        //   document.querySelector(".contentBx p").style.animationDelay = "1.2s";

        document.querySelector(".contentBx h2").style.animation = "fadeOut forwards 0.3s ease-out";
        document.querySelector(".contentBx h2").style.animationDelay = "0.2s";

      }
    });
  }, []);

  return (
    <>
      <div className="test">
       <Scroll/>

        <div className="contentBx">
          <Header contentBxSection={contentBx} setSection={setContentBx} />
          <div className="about">
            <h2 id="aboutt">
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
          <TextFlow />

          <Waypoint bottomOffset="-600px" scrollableAncestor={window} onEnter={() => setContentBx(true)} onLeave={() => setContentBx(false)} />
        </div>
      </div>
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}
export default Intro;
