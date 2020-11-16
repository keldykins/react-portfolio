import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
// import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="img/movia.png"
              // Link to="https://keldykins.github.io/Movia/"
              text="Movia"
              label="Movie Trivia"
              path="https://keldykins.github.io/Movia/"
            />
            <CardItem
              src="img/bitereport.png"
              text="BiteReport"
              label="Food Reviews"
              path="https://bitereport.herokuapp.com/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/codequiz.png"
              text="Code Quiz"
              label="Coding Quiz"
              path="https://keldykins.github.io/4-code-quiz/"
            />
            <CardItem
              src="img/passwordgen.png"
              text="Password Generator"
              label="JS Generator"
              path="https://keldykins.github.io/3-password-generator/"
            />
            <CardItem
              src="img/burgerlogger.png"
              text="Burger Logger"
              label="Engine"
              path="https://young-gorge-99503.herokuapp.com/"
            />
            <CardItem
              src="img/weatherdash.png"
              text="Weather Dashboard"
              label="Server-Side API"
              path="https://keldykins.github.io/6-weather-dashboard/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
