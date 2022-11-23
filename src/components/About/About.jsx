import React from "react";

function About() {
  return (
    <div className="about" id="aboutt">
      <h2 >
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

export default About;
