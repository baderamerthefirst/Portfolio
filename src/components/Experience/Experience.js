import React from "react";
import Card from "./Card"; // Adjust the path based on your project structure
import "./Experience.scss";
import { Experiences } from "../../assets/data";

const Experience = () => {
  // Example data for multiple cards
  

  return (
    <div className="exp-container" id="Experience" >
      <h2>Experience</h2>
      <div className="experience">
        {Experiences.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
