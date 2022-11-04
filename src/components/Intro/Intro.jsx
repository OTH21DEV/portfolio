import "../../components/Intro/Intro.css";
import React, { useEffect } from "react";
import img from "../../assets/img.jpg";

function Intro() {
  useEffect(() => {
    let section = document.querySelector("section");
    let side1 = document.getElementById("side1");
    let side2 = document.getElementById("side2");
    window.addEventListener("scroll", function () {
      if (!window.pageYOffset) {
        section.style.backgroundColor = "#222831";
      } else {
        section.style.background = "#dddddd";
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      }
    });
  }, []);

  return (
    <div className="test">
      <section>
        <h2 className="title">Scroll to find more about me...</h2>
        <div className="side" id="side1"></div>
        <div className="side" id="side2"></div>
      </section>

      <div className="contentBx">
        <h2>Hi, I'm Oxana - front end developper</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, molestias doloremque perspiciatis nam atque sapiente error libero quaerat veniam expedita accusantium delectus at pariatur
          blanditiis commodi dolorum distinctio modi aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, molestias doloremque perspiciatis nam atque sapiente error libero
          quaerat veniam expedita accusantium delectus at pariatur blanditiis commodi dolorum distinctio modi aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, molestias
          doloremque perspiciatis nam atque sapiente error libero quaerat veniam expedita accusantium delectus at pariatur blanditiis commodi dolorum distinctio modi aspernatur. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Fugit, molestias doloremque perspiciatis nam atque sapiente error libero quaerat veniam expedita accusantium delectus at pariatur blanditiis commodi
          dolorum distinctio modi aspernatur. pedita accusantium delectus at pariatur blanditiis commodi dolorum distinctio modi aspernatur.
        </p>
      </div>


      <div className="container">
     
        <div className="wraptest">
          <div className="wrap">
            <div className="information">
              <img src={img} alt=""></img>
              <h3>Oxana Theis</h3>
            </div>

            <div className="about">
              <span>
                <i class="fa-solid fa-house"></i>Home
              </span>
              <span>
                <i class="fas fa-images"></i>Recent Projects
              </span>
              <span>
                <i class="fas fa-hand-holding"></i>What I Offer
              </span>
            </div>

            <div className="wrapper-contact">
              <h3>Got a project to discuss?</h3>
              <h4>Let's talk talk about it</h4>
              <button>Email me</button>
            </div>
          </div>
          <div className="projects">
            <h3>Recent Projects</h3>

            <div className="testproject"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
