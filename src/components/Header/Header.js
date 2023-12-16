// Header.js
// Header.js
import "./Header.scss";
import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png"; // Replace with the actual path to your logo
import logo2 from "../../assets/logo2.png"; // Replace with the actual path to your logo
import { useTheme } from "../Theme/ThemeContext";
import moon from "../../assets/moon.png"; // Replace with the actual path to your logo
import sun from "../../assets/sun.png"; // Replace with the actual path to your logo
import { useState } from "react";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [menu, setmenu] = useState(true);
  const changemenu = () => {
    setmenu(!menu);
  };

  return (
    <header className={`Header ${menu ? "" : "hide"}`}>
       
       <div className="menu-toggle" onClick={changemenu}></div>
        
       
      <div className="res-header">


        <img
          className="theme-icon"          src={`${darkMode ? sun : moon}`}
          alt="theme" width={50} height={50} onClick={toggleTheme}/>
        <nav>
       
       <Link className='home link' to="home" smooth={true} duration={1000}  offset={-0}>Home</Link>
       <Link className='link' to="about" smooth={true} duration={1000}   offset={-0}>About</Link>
       <Link className='link' to="education" smooth={true} duration={1000}   offset={-0}>Education</Link>
       <Link className='link'to="projects" smooth={true} duration={1000} offset={-0}>Projects</Link>
       <Link className='link'to="skills" smooth={true} duration={1000} offset={-0}>Skills</Link>
       <Link className='link'to="Experience" smooth={true} duration={1000} offset={50}>Experience</Link>
       <Link className='link'to="Languages" smooth={true} duration={1000} offset={-0}>Languages</Link>
       <Link className='link'to="contact" smooth={true} duration={1000} offset={-0}>Contact</Link>
     </nav>
      </div>




      <Link
          className="link"
          to="home"
          smooth={true}
          duration={1000}
          offset={-20}
        >
          <div className="logo">
            <img className="ll1" src={logo} alt="Logo" />
            <img className="ll2" src={logo2} alt="Logo2" />
          </div>
        </Link>
    </header>
  );
};

export default Header;
