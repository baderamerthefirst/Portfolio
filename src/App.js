// App.js

import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import { useTheme } from "./components/Theme/ThemeContext";
import "./App.scss";
import Languages from "./components/Languages/Languages";
import Education from "./components/Education/Education";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
   
      <div
        className={`App-container ${darkMode ? "dark-theme" : "light-theme"}`}
      >
        <div className="App">
          <Header />

          <Home />
          <About />
          <Education/>
          <Projects />
          <Skills />
          <Experience />
          <Languages/>
          <Contact />
          <Footer />
        </div>
      </div>
   
  );
}

export default App;
