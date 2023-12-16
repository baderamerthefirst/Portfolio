import React from "react";
import "./Card.scss";

const Card = ({ id, imageSrc, title, description, job }) => {
  return (
    <div className="card">
      <div className={`container`} id={`c${id}`}>
        <div className={`image`} id={`i${id}`}>
          <div className='s'>
           
            <img src={imageSrc} alt={title} />
          </div>
        </div>
        <div className={`story`} id={`s${id}`}>
          <div className={`info`}>
            <h3>{title}</h3>
            {description.map((dData) => (
              <p className="sss">{dData}</p>
            ))}
            {/* <p>{description[0]}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
