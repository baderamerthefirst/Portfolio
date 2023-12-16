import React from 'react';
import './SkillCard.scss'; // Create this SCSS file for styling

const SkillCard = ({ title, level }) => {
  return (
    <div className="skill-card">
      <h4>{title}</h4>
      {level && (
        <div className="skill-level">
          <div className="level-line" style={{ width: `${level}%` }}></div>
          {/* <span>{level}%</span> */}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
