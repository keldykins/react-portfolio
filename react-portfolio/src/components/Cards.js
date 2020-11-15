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
              path="/services"
            />
            <CardItem
              src="img/bitereport.png"
              text="BiteReport"
              label="Food Reviews"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/codequiz.png"
              text="Code Quiz"
              label="Coding Quiz"
              path="/services"
            />
            <CardItem
              src="img/passwordgen.png"
              text="Password Generator"
              label="JS Generator"
              path="/products"
            />
            <CardItem
              src="img/burgerlogger.png"
              text="Burger Logger"
              label="Engine"
              path="/sign-up"
            />
            <CardItem
              src="img/weatherdash.png"
              text="Weather Dashboard"
              label="Server-Side API"
              href="https://keldykins.github.io/6-weather-dashboard/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
