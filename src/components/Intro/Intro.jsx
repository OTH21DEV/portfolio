import "../../components/Intro/Intro.css";
import React, { useEffect } from "react";

import first from "../../assets/01.svg";
import second from "../../assets/02.svg";
import three from "../../assets/03.svg";
import four from "../../assets/04.svg";
import five from "../../assets/05.svg";
import six from "../../assets/06.svg";
import seven from "../../assets/07.svg";
import eight from "../../assets/08.svg";

import github from "../../assets/github.svg";
import logotest from "../../assets/logotest.svg";

function Intro() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    let section = document.querySelector("section");
    let side1 = document.getElementById("side1");
    let side2 = document.getElementById("side2");
    window.addEventListener("scroll", function (e) {
      console.log(window.pageYOffset);
      if (!window.pageYOffset) {
        section.style.backgroundColor = "#222831";
      } else if (window.pageYOffset > 600) {
        document.querySelector(".nav").style.animation = "fadeIn 0.6s forwards ease";
        document.querySelector(".ab").style.animation = "showLi 0.2s forwards ease";
        document.querySelector(".ab").style.animationDelay = "0.6s";

        document.querySelector(".pr").style.animation = "showLi 0.2s forwards ease";
        document.querySelector(".pr").style.animationDelay = "0.7s";

        document.querySelector(".cont").style.animation = "showLi 0.2s forwards ease";
        document.querySelector(".cont").style.animationDelay = "0.8s";

        document.querySelector(".res").style.animation = "showLi 0.2s forwards ease";
        document.querySelector(".res").style.animationDelay = "0.9s";

        document.querySelector(".contentBx h2").style.animation = "showLi 0.6s forwards ease";
        document.querySelector(".contentBx h2").style.animationDelay = "0.9s";
        document.querySelector(".contentBx p").style.animation = "showLi 0.6s forwards ease";
        document.querySelector(".contentBx p").style.animationDelay = "1.2s";
        /*
        document.querySelector(".text-flow").style.animation = "fadeIn 0.6s forwards ease-out";
        document.querySelector(".text-flow").style.animationDelay = "2s";
*/

        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      } else {
        document.querySelector(".contentBx p").style.animation = "fadeOut 0.3s backwards ease";
        //   document.querySelector(".contentBx p").style.animationDelay = "1.2s";

        document.querySelector(".contentBx h2").style.animation = "fadeOut 0.3s backwards ease-out";
        document.querySelector(".contentBx h2").style.animationDelay = "0.2s";

        document.querySelector(".res").style.animation = "hideLi 0.2s backwards ease";
        document.querySelector(".res").style.animationDelay = "0.3s";
        document.querySelector(".cont").style.animation = "hideLi 0.2s backwards ease";
        document.querySelector(".cont").style.animationDelay = "0.4s";
        document.querySelector(".pr").style.animation = "hideLi 0.2s backwards ease";
        document.querySelector(".pr").style.animationDelay = "0.5s";
        document.querySelector(".ab").style.animation = "hideLi 0.2s backwards ease";
        document.querySelector(".ab").style.animationDelay = "0.6s";
        document.querySelector(".nav").style.animation = "fadeOut 0.6s backwards ease-out";
        document.querySelector(".nav").style.animationDelay = "0.6s";

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

  return (
    <>
      <div className="test">
        <section>
          <h2 className="title">Scroll to find more...</h2>
          {/*
          
<div className="testvideo">

          <video autoPlay playsInline muted loop preload>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"></source>
          </video>

<div className="label">


          <h2 className="title">Scroll to find more...</h2>
</div>
</div>


//outline: "1px dashed #16a085", 
  */}

          <div className="side" id="side1"></div>
          <div className="side" id="side2"></div>
        </section>

        <div className="contentBx">
          <div className="nav">
            <div className="ab">About</div>
            <div className="pr">Projects</div>
            <div className="cont">Contact</div>
            <div className="res" style={{ padding: "10px" }}>
              Resume
            </div>
          </div>


          <h2>
            <span style={{ color: "#222831", fontSize: "0.4em", marginBottom: "7px" }}>Hi, my name is</span>
            <br />
            Oxana Theis.
            <br />
            <span className="text-effect" style={{ fontWeight: "lighter", color: "rgb(255, 4, 255)", fontSize: "1em" }}>
              {" "}
              I am building web applications.
            </span>
          </h2>

          {/*<div className="sketch"></div> */}
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
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={first} alt=""></img>
              <h3>RESERVIA</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Travel agency web app</p>
              <a href="https://oth21dev.github.io/OxanaTheis_14_27082022/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML CSS</span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={second} alt=""></img>
              <h3>OH MY FOOD</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Restaurant web app </p>

              <a href="https://oth21dev.github.io/OxanaTheis_3_07062021/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML SCSS Animations</span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={three} alt=""></img>
              <h3>FISH EYE</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Photographers web app</p>
              <a href="https://oth21dev.github.io/OxanaTheis_6_12102021/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML SCSS JS </span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={four} alt=""></img>
              <h3>LES PETITS PLATS</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Searching engine web app</p>
              <a href="https://oth21dev.github.io/OxanaTheis_7_02012022/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML SCSS JS </span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img className="content__project-number" src={five} alt=""></img>
              <h3>KASA</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content">
              <p className="content-description">Real estate web app</p>
              <a href="https://kasa-oxanatheis.netlify.app/" type="button">
                VISIT WEBSITE
              </a>
              <div>
                <span>HTML SCSS JS React</span>
                <img className="web-icon" src={github} alt=""></img>
              </div>
            </div>
          </div>
        </div>

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
              <h3>WEALTH <br/>HEALTH</h3>
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
<div className="footer">
<h2>Got a project in mind ?</h2>
<p>I'm <span style={{color:"rgb(255, 4, 255)"}}>currently available</span> and looking to collaborate on new project.<br/>Let's have a conversation about. </p>
<button type="button">GET IN TOUCH</button>
</div>

<div className="why">
  <span>© 2022 OXANA THEIS. ALL RIGHTS RESERVED.</span>
<p>DESIGNED & DEVELOPED BY OXANA THEIS</p>
<p>LINKEDIN</p>
<p>GITHUB</p>
</div>
    </>
  );
}
export default Intro;
