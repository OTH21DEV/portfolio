import React, { useEffect } from "react";
import "./floatingtitle.css";

function FloatingTitle() {
  useEffect(() => {
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
    <div className="scrollable">
      <div className="project">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

export default FloatingTitle;
