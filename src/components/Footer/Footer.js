import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import specific icons
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2023 Bader Amer. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/baderamer" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/baderamerthefirst" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {/* Add more social media links as needed */}
        </div>
        {/* Add other content, contact info, navigation links, etc. */}
      </div>
    </footer>
  );
};

export default Footer;
