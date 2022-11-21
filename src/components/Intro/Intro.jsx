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
import leaf1 from "../../assets/leaf1.png";
import leaf2 from "../../assets/leaf2.png";
import leaf3 from "../../assets/leaf3.png";
import github from "../../assets/github.svg";

import { Waypoint } from "react-waypoint";

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
        console.log("suis plus 600");
        document.querySelector(".nav").classList.add("nav-animation");
        document.querySelector(".ab").classList.add("li-animation");
        document.querySelector(".pr").classList.add("li-animation");
        document.querySelector(".cont").classList.add("li-animation");
        document.querySelector(".res").classList.add("li-animation");

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

        document.querySelector(".nav").classList.remove("nav-animation");
        document.querySelector(".ab").classList.remove("li-animation");
        document.querySelector(".pr").classList.remove("li-animation");
        document.querySelector(".cont").classList.remove("li-animation");
        document.querySelector(".res").classList.remove("li-animation");

        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      }
    });

    const scrollable = document.querySelector(".scrollable");
    let current = 0;
    let target = 0;
    const ease = 0.1;

    const stickyProject = document.querySelector(".project");

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    function init() {
      document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
    }
    function smoothScroll() {
      target = window.scrollY;
      current = lerp(current, target, ease);
      scrollable.style.transform = `translate3d(0,${-current}px,0)`;
      sticky();
      window.requestAnimationFrame(smoothScroll);
    }

    function sticky() {
      let offset = window.innerHeight;
      // let offset = window.innerHeight*2;
      if (current < offset) {
        stickyProject.style.transform = `translate3d(0,0,0)`;
      }
      if (current >= offset && current <= offset * 2) {
        stickyProject.style.transform = `translate3d(0,${current - offset}px,0)`;
      }
      if (current > offset * 2) {
        stickyProject.style.transform = `translate3d(0,${offset}px,0)`;
      }
    }
    init();
    smoothScroll();
  }, []);

  /**
 * 
 *    
        onEnter={() => setContentBx(true)}
        onLeave={() => setContentBx(false)}
 */
  return (
    <>
      <div className="test">
        <section>
          <h2 className="title">Scroll to find more...</h2>

          <div className="side" id="side1"></div>
          <div className="side" id="side2"></div>
        </section>

        <div className="contentBx">
          <div className="nav">
            <a className={contentBx ? "ab" : "ab active"} href="#aboutt">
              About
            </a>

            <a className={contentBx ? "pr" : "pr active"} href="#projectss">
              Projects
            </a>

            <a className={contentBx ? "cont" : "cont active"} href="#contact">
              Contact
            </a>

            <a style={{ padding: "10px" }} className={contentBx ? "res" : "res active"} href="#resume">
              Resume
            </a>
          </div>
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

          <div className="text-flow">
            <div class="content__container">
              <div class="content__container__text">Skills:</div>

              <ul class="content__container__list">
                <li class="content__container__list__item">HTML{"  "} CSS SASS</li>
                <li class="content__container__list__item"> JavaScript React Redux</li>
                <li class="content__container__list__item">Bootstrap Github</li>
                <li class="content__container__list__item">Figma Gimp</li>
              </ul>
            </div>
          </div>

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

        {/*TEST */}

        <div className="scrollable">
          <div className="project">
            <h1>Projects</h1>
          </div>
        </div>
      </div>
      <div className="footer" id="contact">
        <h2>Got a project in mind ?</h2>
        <p>
          I'm <span style={{ color: "rgb(255, 4, 255)" }}>currently available</span> and looking to collaborate on new project.
          <br />
          Let's have a conversation about.{" "}
        </p>
        <button type="button">GET IN TOUCH</button>

        <div className="wrapperleaf">
          <div className="leaf-container">
            <img className="leaf1" src={leaf1} alt=""></img>

            <img className="leaf2" src={leaf2} alt=""></img>

            <img className="leaf3" src={leaf3} alt=""></img>
          </div>
        </div>
      </div>

      <div className="why">
        <span>© 2022 OXANA T. ALL RIGHTS RESERVED.</span>
        <p>DESIGNED & DEVELOPED BY OXANA T.</p>
        <p>LINKEDIN</p>
        <p>GITHUB</p>
      </div>
    </>
  );
}
export default Intro;
