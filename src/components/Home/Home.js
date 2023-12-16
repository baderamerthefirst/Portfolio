import React from "react";
import "./Home.scss";
import { useTheme } from "../Theme/ThemeContext";
import moon from "../../assets/moon.png"; // Replace with the actual path to your logo
import sun from "../../assets/sun.png"; // Replace with the actual path to your logo
import Draggable from "react-draggable";

const Home = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <section id="home" className="home-container">
      <div className="background-image"></div>
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and skills</p>
        <p className="anim-container">
          I am 
          <section class="animation">
            <div class="first">
              <div>MyName</div>
            </div>
            <div class="second">
              <div>Computer Engineer</div>
            </div>
            <div class="third">
              <div>Web Developer</div>
            </div>
            <div class="forth">
              <div>Hardware Programmer</div>
            </div>
            <div class="fifth">
              <div>DataBase Developer</div>
            </div>
          </section>
        </p>
        <img
          className="theme-icon"
          src={`${darkMode ? sun : moon}`}
          alt="theme"
          width={50}
          height={50}
          onClick={toggleTheme}
        />
      </div>
      {/* <Draggable> */}
      <div
        className="floating-theme-img"
      
      >
        <div className="image" width={200} height={200}></div>
      </div>
      {/* </Draggable> */}
    </section>
  );
};

export default Home;
