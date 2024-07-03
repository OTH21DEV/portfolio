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
import ten from "../../assets/10.svg";
import "./projects.css";

function Projects() {
  return (
    <div className="container" id="projects">
           <Card
        number={first}
        name={"LAVCRAFT"}
        description={"FRONTEND REACT WEB APP - build a corporate web site"}
        site={"https://lavcraft.com/"}
        skills={"JS React Heroku"}
        githubLink={"https://github.com/OTH21DEV/agency_pro.git"}
      ></Card>
         <Card
        number={second}
        name={"SOCIAL NETWORK"}
        description={"Fullstack- build RESTful API for corporate social network"}
        site={"https://corporate-social-network-902adf387c2e.herokuapp.com/"}
        skills={"JS React MySQL Node.js Express Cloudinary Heroku"}
        githubLink={"https://github.com/OTH21DEV/groupomania_p16"}
      ></Card>
      {/* <Card
        number={first}
        name={"PIIQUANTE"}
        description={"Backend - build secure API for a food reviews app"}
        site={"https://piiquante-p15.herokuapp.com/"}
        skills={"JS MongoDB Atlas Express Cloudinary Node.js Heroku"}
        githubLink={"https://github.com/OTH21DEV/piiquante-p15.git"}
      ></Card> */}

      <Card
        number={three}
        name={"ARGENT BANK"}
        description={"FRONTEND REACT WEB APP - use an API for a bank user account"}
        site={"https://argent-bank-p13.herokuapp.com/"}
        skills={"HTML CSS JS React Redux API Heroku"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_13_03082022.git"}
      ></Card>
      <Card
        number={four}
        name={"SPORT SEE"}
        description={"FRONTEND REACT WEB APP - build an analytics dashboard"}
        site={"https://sportsee-p12.herokuapp.com/"}
        skills={"HTML CSS JS React API Recharts Heroku"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_12_20062022.git"}
      ></Card>

      <Card
        number={five}
        name={"WEALTH HEALTH"}
        description={"FRONTEND REACT WEB APP - pass a jQuery library to React"}
        site={"https://oth21dev.github.io/OxanaTheis_14_27082022/"}
        skills={"HTML CSS JS React Redux "}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_14_27082022.git"}
      ></Card>

      <Card
        number={six}
        name={"KASA"}
        description={"FRONTEND REACT WEB APP - develop an app with React and React Router"}
        site={"https://kasa-oxanatheis.netlify.app/"}
        skills={"HTML SCSS JS React"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_11_25052022.git"}
      ></Card>

      <Card
        number={seven}
        name={"LES PETITS PLATS"}
        description={"FRONTEND WEB APP - develop a searching engine in JavaScript"}
        site={"https://oth21dev.github.io/OxanaTheis_7_02012022/"}
        skills={"HTML SCSS JS"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_7_02012022.git"}
      ></Card>
      <Card
        number={eight}
        name={"FISH EYE"}
        description={"FRONTEND WEB APP - create an accessible site"}
        site={"https://oth21dev.github.io/OxanaTheis_6_12102021/"}
        skills={"HTML SCSS JS"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_6_12102021.git"}
      ></Card>

      <Card
        number={nine}
        name={"GAME ON"}
        description={"FRONTEND WEB APP - develop a landing page with JavaScript"}
        site={"https://oth21dev.github.io/GameOn-website-FR/"}
        skills={"HTML CSS JS "}
        githubLink={"https://github.com/OTH21DEV/GameOn-website-FR.git"}
      ></Card>
      <Card
        number={ten}
        name={"OH MY FOOD"}
        description={"FRONTEND WEB APP - animate a web page with CSS animations"}
        site={"https://oth21dev.github.io/OxanaTheis_3_07062021/"}
        skills={"HTML SCSS Animations"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_3_07062021.git"}
      ></Card>

      {/* <Card
        number={ten}
        name={"RESERVIA"}
        description={"FRONTEND WEB APP - turn a mockup into a website"}
        site={"https://oth21dev.github.io/OxanaTheis_2_05042020/"}
        skills={"HTML CSS"}
        githubLink={"https://github.com/OTH21DEV/OxanaTheis_2_05042020.git"}
      ></Card> */}

      <FloatingTitle />
    </div>
  );
}

export default Projects;
