// Languages.js

import React, { useState } from 'react';
import './Languages.scss';
// Languages.js
import { MyLanguages } from '../../assets/data';
import { useInView } from 'react-intersection-observer';
// ... (existing code)

const Languages = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
  
    const handleLanguageClick = (index) => {
      setSelectedLanguage(selectedLanguage === index ? null : index);
    };
  
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger the animation once
    });
  
    return (
      <div className={`languages-container ${inView ? "inView" : ""} `} id='Languages'  ref={ref}>
        <h2>Languages</h2>
        {MyLanguages.map((language, index) => (
          <div
            key={index}
            className={`language ${selectedLanguage === index ? 'active' : ''}`}
            onClick={() => handleLanguageClick(index)}
          >
            <span className="language-name">{language.name}</span>
            <span className="language-level">{language.level}</span>
            <div className="language-bar" style={{ width: language.width }}></div>
            {/* {selectedLanguage === index && (
              
            )} */}

            <div className={`language-description ${selectedLanguage === index ? 'display' : 'block'}`}>
                {language.description}
              </div>
            </div>
        ))}
      </div>
    );
  };
  
  export default Languages;
  