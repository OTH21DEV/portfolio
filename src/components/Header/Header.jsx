import React, { useEffect } from "react";
import "./header.css";

const Header = ({ contentBxSection, setSection }) => {
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 600) {
        console.log("suis plus 600");
        document.querySelector(".nav").classList.add("nav-animation");
        document.querySelector(".link-about").classList.add("link-animation");
        document.querySelector(".link-projects").classList.add("link-animation");
        document.querySelector(".link-contact").classList.add("link-animation");
        document.querySelector(".link-resume").classList.add("link-animation");
      } else {
        document.querySelector(".nav").classList.remove("nav-animation");
        document.querySelector(".link-about").classList.remove("link-animation");
        document.querySelector(".link-projects").classList.remove("link-animation");
        document.querySelector(".link-contact").classList.remove("link-animation");
        document.querySelector(".link-resume").classList.remove("link-animation");
      }
    });
  }, []);

  return (
    <nav className="nav">
      <ul className="ul">
        <a className={contentBxSection ? "link-about" : "link-about changeColor"} href="#aboutt">
          <li> About</li>
        </a>

        <a className={contentBxSection ? "link-projects" : "link-projects changeColor"} href="#projectss">
          <li> Projects</li>
        </a>

        <a className={contentBxSection ? "link-contact" : "link-contact changeColor"} href="#contact">
          <li> Contact</li>
        </a>

        <a style={{ padding: "10px" }} className={contentBxSection ? "link-resume" : "link-resume changeColor"} href="#resume">
          <li> Resume</li>
        </a>
      </ul>
    </nav>
  );
};

export default Header;
