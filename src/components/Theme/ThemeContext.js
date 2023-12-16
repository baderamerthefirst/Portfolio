import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage for the theme preference on initial load
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;

  const [darkMode, setDarkMode] = useState(initialTheme);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the theme preference to local storage
      localStorage.setItem("theme", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    // Add event listener to handle theme changes from other tabs/windows
    const handleStorageChange = (event) => {
      if (event.key === "theme") {
        setDarkMode(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
