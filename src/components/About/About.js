// About.js

import React, { useState, useEffect } from "react";
import "./About.scss";
import { Aboutme } from "../../assets/data";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const parallaxContainer = document.getElementById("about");
    parallaxContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      parallaxContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateParallaxEffect = () => {
    const parallaxAmount = 20; // Adjust the parallax effect
    const xPos = (mousePosition.x / window.innerWidth - 0.5) * parallaxAmount;
    const yPos = (mousePosition.y / window.innerHeight - 0.5) * parallaxAmount;
    return `translate(${xPos}px, ${yPos}px)`;
  };

  return (
    <section id="about" className="parallax-container">
      <div
        className="background-image"
        style={{ transform: calculateParallaxEffect() }}
      ></div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
  {Aboutme.map((am, index) => (
    <p key={index}>{am}</p>
  ))}
</p>
      </div>
    </section>
  );
};

export default About;
