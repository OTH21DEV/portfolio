import React from "react";
import FloatingTitle from "../FloatingTitle/FloatingTitle";
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
import "./projects.css";

function Projects() {
  return (
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

      <Card
        number={six}
        name={"SPORT SEE"}
        description={"Sport web app"}
        site={"https://sportsee-p12.herokuapp.com/"}
        skills={"HTML CSS JS React API"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_12_20062022.git"}
      ></Card>

      <Card
        number={seven}
        name={"ARGENT BANK"}
        description={"Bank web app"}
        site={"https://sportsee-p12.herokuapp.com/"}
        skills={"HTML CSS JS React Redux API"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_13_03082022.git"}
      ></Card>

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



      <div className="card">
        <div className="face face1">
          <div className="content">
            <img className="content__project-number" src={eight} alt=""></img>
            <h3>
              PLUGIN <br />MODAL
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

  );
}

export default Projects;
