import "../../components/Intro/Intro.css";
import React,{ useEffect } from "react";

function Intro() {
    useEffect(() => {
    let section = document.querySelector("section");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center)";
  });
}, []);
  return (
    <div className="test">
      <h2 className="title">Scroll to find more about me...</h2>
      <section></section>
      <div className="container">
        <h2>Some information here </h2>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
    </div>
  );
}
export default Intro;
