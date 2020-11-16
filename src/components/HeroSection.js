import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        {/* <img src="img/name.png" alt="name Keldan Cundy" class="img-fluid"></img> */}
        <h1>Keldan Cundy</h1>
        <h3>Front-End Developer based in Denver, Colorado</h3>
        <img
          src="./img/plant.png"
          class="plant"
          width="185"
          height="185"
          // class="d-inline-block align-top"
          alt="plant ink illustration"
          loading="lazy"
        ></img>
        {/* <img src="img/brand.png" alt="brand" class="img-fluid"></img> */}
        <h2>lets make your creative vision a reality</h2>
      </div>
    </>
  );
}

export default HeroSection;
