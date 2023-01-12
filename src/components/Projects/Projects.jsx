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
import nine from "../../assets/09.svg";
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
        description={"Photographers web app"}
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
        name={"GAME ON"}
        description={"Single page Javascript app"}
        site={"https://oth21dev.github.io/GameOn-website-FR/"}
        skills={"HTML CSS JS "}
        githubLink={"https://github.com/OTH21DEV/GameOn-website-FR.git"}
      ></Card>

      <Card
        number={six}
        name={"KASA"}
        description={"Real estate web app"}
        site={"https://kasa-oxanatheis.netlify.app/"}
        skills={"HTML SCSS JS React"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_11_25052022.git"}
      ></Card>

      <Card
        number={seven}
        name={"SPORT SEE"}
        description={"Sport web app"}
        site={"https://sportsee-p12.herokuapp.com/"}
        skills={"HTML CSS JS React API"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_12_20062022.git"}
      ></Card>

      <Card
        number={eight}
        name={"ARGENT BANK"}
        description={"Bank web app"}
        site={"https://argent-bank-p13.herokuapp.com/"}
        skills={"HTML CSS JS React Redux API"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_13_03082022.git"}
      ></Card>

      <Card
        number={nine}
        name={"WEALTH HEALTH"}
        description={"HR web app"}
        site={"https://oth21dev.github.io/OxanaTheis_14_27082022/"}
        skills={"HTML CSS JS React Redux "}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_14_27082022.git"}
      ></Card>

      <FloatingTitle />
    </div>
  );
}

export default Projects;
