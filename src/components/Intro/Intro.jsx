import "../../components/Intro/Intro.css";
import React, { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";

import first from "../../assets/01.svg";
import second from "../../assets/02.svg";
import three from "../../assets/03.svg";
import four from "../../assets/04.svg";
import five from "../../assets/05.svg";
import six from "../../assets/06.svg";
import seven from "../../assets/07.svg";
import eight from "../../assets/08.svg";

import github from "../../assets/github.svg";

import { Waypoint } from "react-waypoint";
import Header from "../Header/Header";
import TextFlow from "../TextFlow/TextFlow";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
import Leafs from "../Leafs/Leafs";
import Footer from "../Footer/Footer";

function Intro() {
  const [contentBx, setContentBx] = useState(true);

  useEffect(() => {
    //
    window.scrollTo({ top: 0, behavior: "smooth" });

    let section = document.querySelector("section");
    let side1 = document.getElementById("side1");
    let side2 = document.getElementById("side2");

    window.addEventListener("scroll", function (e) {
      if (!window.pageYOffset) {
        section.style.backgroundColor = "#222831";
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

        /*
        document.querySelector(".text-flow").style.animation = "fadeIn 0.6s forwards ease-out";
        document.querySelector(".text-flow").style.animationDelay = "2s";
*/

        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      } else {
        console.log("suis moins 600");
        document.querySelector(".contentBx p").style.animation = "fadeOut forwards 0.3s ease";
        //   document.querySelector(".contentBx p").style.animationDelay = "1.2s";

        document.querySelector(".contentBx h2").style.animation = "fadeOut forwards 0.3s ease-out";
        document.querySelector(".contentBx h2").style.animationDelay = "0.2s";

        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      }
    });
  }, []);

  return (
    <>
      <div className="test">
        <section>
          <h2 className="title">Scroll to find more...</h2>

          <div className="side" id="side1"></div>
          <div className="side" id="side2"></div>
        </section>

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
      <div className="container" id="projectss">
        <Card
          number={first}
          name={"RESERVIA"}
          description={"Travel agency web app"}
          site={"https://oth21dev.github.io/OxanaTheis_2_05042020/"}
          skills={"HTML CSS"}
          githubLink={"https://github.com/OTH21DEV/OxanaTheis_2_05042020.git"}
        ></Card>

        <Card
          number={second}
          name={"OH MY FOOD"}
          description={"Restaurant web app"}
          site={"https://oth21dev.github.io/OxanaTheis_3_07062021/"}
          skills={"HTML SCSS Animations"}
          githubLink={"https://github.com/OTH21DEV/OxanaTheis_3_07062021.git"}
        ></Card>

        <Card
          number={three}
          name={"FISH EYE"}
          description={"hotographers web app"}
          site={"https://oth21dev.github.io/OxanaTheis_6_12102021/"}
          skills={"HTML SCSS JS"}
          githubLink={"https://github.com/OTH21DEV/OxanaTheis_6_12102021.git"}
        ></Card>

        <Card
          number={four}
          name={"LES PETITS PLATS"}
          description={"Searching engine web app"}
          site={"https://oth21dev.github.io/OxanaTheis_7_02012022/"}
          skills={"HTML SCSS JS"}
          githubLink={"https://github.com/OTH21DEV/OxanaTheis_7_02012022.git"}
        ></Card>

        <Card
          number={five}
          name={"KASA"}
          description={"Real estate web app"}
          site={"https://kasa-oxanatheis.netlify.app/"}
          skills={"HTML SCSS JS React"}
          githubLink={"https://github.com/OTH21DEV/OxanaTheis_11_25052022.git"}
        ></Card>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={six} alt=""></img>
              <h3>SPORT SEE</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Sport web app</p>
              <a href="https://oth21dev.github.io/OxanaTheis_14_27082022/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML CSS JS React </span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={seven} alt=""></img>
              <h3>ARGENT BANK</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Bank web app</p>
              <a href="https://oth21dev.github.io/OxanaTheis_14_27082022/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML CSS JS React Redux </span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={eight} alt=""></img>
              <h3>
                WEALTH <br />
                HEALTH
              </h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">HR web app</p>
              <a href="https://oth21dev.github.io/OxanaTheis_14_27082022/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML CSS JS React Redux </span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <FloatingTitle />
      </div>
      <div className="contact" id="contact">
        <h2>Got a project in mind ?</h2>
        <p>
          I'm <span style={{ color: "rgb(255, 4, 255)" }}>currently available</span> and looking to collaborate on new project.
          <br />
          Let's have a conversation about.{" "}
        </p>
        <button type="button">GET IN TOUCH</button>

        <Leafs />
      </div>

      <Footer />
    </>
  );
}
export default Intro;
