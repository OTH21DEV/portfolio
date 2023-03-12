import React from "react";
import github from "../../assets/github.svg";
import './card.css'

function Card({ number, name, description, site, skills, githubLink }) {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img className="content__project-number" src={number} alt=""></img>
          <h3>{name}</h3>
        </div>
      </div>

      <div className="face face2">
        <div className="content">
          <p className="content-description">{description}</p>
          <a className="btn" href={site} type="button" target="_blank" rel="noreferrer">
            VISIT WEBSITE
          </a>
          <div>
            <span>{skills}</span>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <img className="web-icon" src={github} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
