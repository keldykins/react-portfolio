import React from "react";
import "./Cards.css";
import Project from "./Project";
// import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Project
              src="img/movia.png"
              text="Movia"
              label="Movie Trivia"
              path="https://keldykins.github.io/Movia/"
            />
            <Project
              src="img/bitereport.png"
              text="BiteReport"
              label="Food Reviews"
              path="https://bitereport.herokuapp.com/"
            />
          </ul>
          <ul className="cards__items">
            <Project
              src="./img/codequiz.png"
              text="Code Quiz"
              label="Coding Quiz"
              path="https://keldykins.github.io/4-code-quiz/"
            />
            <Project
              src="./img/passwordgen.png"
              text="Password Generator"
              label="JS Generator"
              path="https://keldykins.github.io/3-password-generator/"
            />
            <Project
              src="./img/burgerlogger.png"
              text="Burger Logger"
              label="Engine"
              path="https://young-gorge-99503.herokuapp.com/"
            />
            <Project
              src="./img/wormhole.png"
              text="Wormhole"
              label="MERN Book Search"
              path="https://immense-cliffs-21577.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
