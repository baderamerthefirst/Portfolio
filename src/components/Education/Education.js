import React from "react";
import { useInView } from "react-intersection-observer";
import "./Education.scss";
import { Educations } from "../../assets/data";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once
  });

  return (
    <section
      id="education"
      className={`education-container ${inView ? "inView" : ""}`}
      ref={ref}
    >
      <h2>Education</h2>
      <div className="education-content">
        {Educations.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3>{edu.name}</h3>
            <p>{edu.date}</p>
            <h4>{edu.achievement}</h4>
            {edu.description.map((ddd, idx) => (
              <p key={idx}>{ddd}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
