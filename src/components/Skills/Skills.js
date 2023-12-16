import React from "react";
import SkillCard from "./SkillCard"; // Import the SkillCard component
import "./Skills.scss"; // Create this SCSS file for styling
import {
  technicalSkills,
  personalSkills,
  softwareSkills,
} from "../../assets/data";
import { useInView } from "react-intersection-observer";



const Skills = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once
  });

  // id="projects"
  // className={`projects-container ${inView ? "inView" : ""}`}
  // ref={ref}

  return (
    <section id="skills" className= {`skills-container  ${inView ? "inView" : ""}`}    ref={ref}>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="tech-skills">
            <h3>Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.name} level={skill.level} />
            ))}
          </div>
          <div className="other-skills">
          <div className="personal-skills">
            <h3>Personal Skills</h3>
            {personalSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.name} level={skill.level} />
            ))}
          </div>
          <div className="software-skills">
            <h3 >Software Skills</h3>
            {softwareSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.name} level={skill.level} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
